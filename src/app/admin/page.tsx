'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CourseItem {
  id: string;
  title: string;
  level: string;
  levelColor: string;
  modality: 'Grupal' | 'Individual' | 'Ambas';
  description: string;
  image: string;
  cta: string;
  hidden?: boolean;
}

// Available images list from assets/images for selecting backgrounds
const PRESET_IMAGES = [
  { path: '/assets/images/Carlos-Polizza-1.jfif', label: 'Carlos entrenando (1)' },
  { path: '/assets/images/Carlos-Polizza-2.jfif', label: 'Carlos con perro (2)' },
  { path: '/assets/images/Carlos-Polizza-3.jfif', label: 'Carlos dictando curso (3)' },
  { path: '/assets/images/nicolas-pellizzari-1.jfif', label: 'Nicolás paseando (1)' },
  { path: '/assets/images/nicolas-pellizzari-4.jfif', label: 'Nicolás entrenando (4)' },
  { path: '/assets/images/nicolas-pellizzari-5.jfif', label: 'Nicolás con cachorro (5)' },
  { path: '/assets/images/perro-1.jpg', label: 'Perro jugando 1' },
  { path: '/assets/images/perro-2.png', label: 'Perro en jardín 2' },
  { path: '/assets/images/perro-3.jpg', label: 'Perro olfateando 3' },
  { path: '/assets/images/perro-4.png', label: 'Perros socializando 4' },
  { path: '/assets/images/perro-5.jpg', label: 'Perro de cerca 5' },
  { path: '/assets/images/perro-6.jpg', label: 'Perro saltando 6' },
  { path: '/assets/images/perro-7.jpg', label: 'Cachorrito tierno 7' },
];

const LEVEL_COLORS: Record<string, string> = {
  INICIAL: 'var(--verde)',
  INTERMEDIO: 'var(--tangerine)',
  AVANZADO: 'var(--honey-gold)',
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Course Management State
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Edit/Add modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Partial<CourseItem> | null>(null);

  // Load auth session on client
  useEffect(() => {
    const auth = sessionStorage.getItem('impronta_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchCourses();
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/courses');
      if (res.ok) {
        const data = await res.json();
        setCourses(data);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'impronta' && password === 'adminimpronta') {
      sessionStorage.setItem('impronta_auth', 'true');
      setIsAuthenticated(true);
      setErrorMsg('');
      fetchCourses();
    } else {
      setErrorMsg('Usuario o contraseña incorrectos.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('impronta_auth');
    setIsAuthenticated(false);
    setCourses([]);
  };

  // Save courses database modification
  const saveCoursesToAPI = async (updatedCourses: CourseItem[]) => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer impronta-session-token',
        },
        body: JSON.stringify(updatedCourses),
      });

      if (res.ok) {
        setCourses(updatedCourses);
        setIsModalOpen(false);
        setEditingCourse(null);
      } else {
        alert('Error al guardar los cambios en el servidor.');
      }
    } catch (error) {
      console.error('Error saving courses:', error);
      alert('Error de conexión al guardar los cursos.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleOpenAdd = () => {
    setEditingCourse({
      id: String(Date.now()),
      title: '',
      level: 'INICIAL',
      levelColor: LEVEL_COLORS['INICIAL'],
      modality: 'Grupal',
      description: '',
      image: PRESET_IMAGES[0].path,
      cta: 'Conocé más →',
      hidden: false,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (course: CourseItem) => {
    setEditingCourse({ ...course });
    setIsModalOpen(true);
  };

  const handleDeleteCourse = async (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este curso? Esta acción no se puede deshacer.')) {
      const filtered = courses.filter((c) => c.id !== id);
      await saveCoursesToAPI(filtered);
    }
  };

  const handleToggleHide = async (id: string) => {
    const updated = courses.map((c) => {
      if (c.id === id) {
        return { ...c, hidden: !c.hidden };
      }
      return c;
    });
    await saveCoursesToAPI(updated);
  };

  const handleSaveModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCourse || !editingCourse.title || !editingCourse.description) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const level = editingCourse.level || 'INICIAL';
    const levelColor = LEVEL_COLORS[level] || LEVEL_COLORS['INICIAL'];
    const completeCourse: CourseItem = {
      id: editingCourse.id || String(Date.now()),
      title: editingCourse.title,
      level: level,
      levelColor: levelColor,
      modality: editingCourse.modality || 'Grupal',
      description: editingCourse.description,
      image: editingCourse.image || PRESET_IMAGES[0].path,
      cta: editingCourse.cta || 'Conocé más →',
      hidden: editingCourse.hidden || false,
    };

    let updatedCourses: CourseItem[];
    const exists = courses.some((c) => c.id === completeCourse.id);

    if (exists) {
      updatedCourses = courses.map((c) => (c.id === completeCourse.id ? completeCourse : c));
    } else {
      updatedCourses = [...courses, completeCourse];
    }

    await saveCoursesToAPI(updatedCourses);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header />

      <main className="flex-grow pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {!isAuthenticated ? (
          /* LOGIN SCREEN */
          <div className="max-w-md mx-auto my-12 md:my-20">
            <div className="bg-white rounded-[2.5rem] border border-[#eae6db] p-8 md:p-10 shadow-xl">
              <div className="text-center mb-8">
                <span className="text-tangerine font-bold tracking-widest uppercase text-xs mb-2 block">
                  Área de Administración
                </span>
                <h1 className="font-serif font-bold text-3xl text-charcoal leading-tight">
                  Impronta Canina
                </h1>
                <p className="text-slate-400 text-sm mt-2">
                  Ingresá tus credenciales para administrar los cursos.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                {errorMsg && (
                  <div className="bg-red-50 text-red-600 text-xs font-semibold p-4 rounded-xl border border-red-100">
                    {errorMsg}
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Usuario
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Usuario"
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium border border-slate-200 bg-slate-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-tangerine"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium border border-slate-200 bg-slate-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-tangerine"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-bold text-white bg-charcoal py-3.5 rounded-xl transition-all hover:brightness-110 active:scale-95 text-center mt-2 cursor-pointer shadow-md"
                >
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* ADMIN DASHBOARD */
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#eae6db] pb-6">
              <div>
                <h1 className="font-serif font-bold text-3xl md:text-4xl text-charcoal">
                  Administrador de Cursos
                </h1>
                <p className="text-slate-500 text-sm mt-1">
                  Agregá, editá, eliminá u ocultá cursos de la web en tiempo real.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleOpenAdd}
                  className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl text-white bg-verde shadow-md hover:brightness-110 transition-all cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Agregar Nuevo Curso
                </button>
                <button
                  onClick={handleLogout}
                  className="font-bold text-sm px-4 py-3 rounded-xl border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>

            {isLoading ? (
              <div className="text-center py-20 text-slate-400 font-bold">Cargando cursos...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className={`bg-white rounded-3xl border border-[#eae6db] shadow-md overflow-hidden relative flex flex-col justify-between transition-all duration-300 ${
                      course.hidden ? 'opacity-65 border-dashed bg-slate-100/50' : ''
                    }`}
                  >
                    {/* Header Image Preview */}
                    <div className="relative h-44 bg-slate-100 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase text-white"
                          style={{ backgroundColor: course.levelColor }}
                        >
                          {course.level}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold text-white bg-black/40 backdrop-blur-sm">
                          {course.modality}
                        </span>
                      </div>

                      {course.hidden && (
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full shadow">
                          OCULTO
                        </div>
                      )}

                      <h3 className="absolute bottom-4 left-4 right-4 font-serif font-bold text-lg text-white truncate">
                        {course.title}
                      </h3>
                    </div>

                    {/* Course details */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                        {course.description}
                      </p>

                      <div className="flex flex-col gap-2.5 pt-4 border-t border-[#eae6db]/60">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleOpenEdit(course)}
                            className="flex-1 font-bold text-xs py-2.5 rounded-xl border border-slate-200 text-charcoal bg-white hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer text-center"
                          >
                            Editar Info
                          </button>

                          <button
                            onClick={() => handleToggleHide(course.id)}
                            className={`flex-1 font-bold text-xs py-2.5 rounded-xl transition-all cursor-pointer text-center border ${
                              course.hidden
                                ? 'bg-verde/15 text-verde border-verde/20 hover:bg-verde/20'
                                : 'bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-100'
                            }`}
                          >
                            {course.hidden ? 'Mostrar' : 'Ocultar'}
                          </button>
                        </div>

                        <button
                          onClick={() => handleDeleteCourse(course.id)}
                          className="w-full font-bold text-xs py-2 text-red-600 hover:bg-red-50 rounded-xl transition-all cursor-pointer text-center"
                        >
                          Eliminar Curso
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* EDIT/ADD MODAL */}
      {isModalOpen && editingCourse && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-[2.5rem] border border-[#eae6db] shadow-2xl w-full max-w-2xl overflow-hidden my-8">
            <div className="border-b border-[#eae6db] p-6 flex justify-between items-center bg-[#fdfbf7]">
              <h2 className="font-serif font-bold text-xl text-charcoal">
                {editingCourse.title ? 'Editar Curso' : 'Crear Nuevo Curso'}
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingCourse(null);
                }}
                className="text-slate-400 hover:text-slate-600 p-1.5 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="p-6 md:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Título del Curso
                  </label>
                  <input
                    type="text"
                    value={editingCourse.title || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                    placeholder="Ej. Cachorros Estrellas"
                    className="w-full px-4 py-3 rounded-xl text-sm border border-slate-200 bg-slate-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-tangerine"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Modalidad
                  </label>
                  <select
                    value={editingCourse.modality || 'Grupal'}
                    onChange={(e) =>
                      setEditingCourse({
                        ...editingCourse,
                        modality: e.target.value as CourseItem['modality'],
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm border border-slate-200 bg-slate-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-tangerine cursor-pointer"
                  >
                    <option value="Grupal">Grupal</option>
                    <option value="Individual">Individual</option>
                    <option value="Ambas">Grupal · Individual (Ambas)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Nivel de Dificultad
                  </label>
                  <select
                    value={editingCourse.level || 'INICIAL'}
                    onChange={(e) => setEditingCourse({ ...editingCourse, level: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-slate-200 bg-slate-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-tangerine cursor-pointer"
                  >
                    <option value="INICIAL">Inicial</option>
                    <option value="INTERMEDIO">Intermedio</option>
                    <option value="AVANZADO">Avanzado</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Texto del Botón (CTA)
                  </label>
                  <input
                    type="text"
                    value={editingCourse.cta || 'Conocé más →'}
                    onChange={(e) => setEditingCourse({ ...editingCourse, cta: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-slate-200 bg-slate-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-tangerine"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Descripción Corta
                </label>
                <textarea
                  value={editingCourse.description || ''}
                  onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })}
                  placeholder="Escribe una breve descripción del curso..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm border border-slate-200 bg-slate-50 text-charcoal focus:outline-none focus:ring-2 focus:ring-tangerine resize-none"
                  required
                />
              </div>

              {/* IMAGE SELECTION GRID */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Imagen de Fondo
                </label>
                <p className="text-[11px] text-slate-400 mb-2">
                  Selecciona una de las imágenes disponibles en el proyecto:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 max-h-48 overflow-y-auto">
                  {PRESET_IMAGES.map((img) => {
                    const isSelected = editingCourse.image === img.path;
                    return (
                      <div
                        key={img.path}
                        onClick={() => setEditingCourse({ ...editingCourse, image: img.path })}
                        className={`group relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                          isSelected
                            ? 'border-tangerine ring-2 ring-tangerine/30 scale-[0.98]'
                            : 'border-transparent hover:border-slate-400'
                        }`}
                      >
                        <img
                          src={img.path}
                          alt={img.label}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-colors flex items-end p-1">
                          <span className="text-[9px] text-white font-bold leading-none truncate w-full">
                            {img.label}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="absolute top-1 right-1 bg-tangerine text-white rounded-full p-0.5">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-6 border-t border-[#eae6db] flex flex-col sm:flex-row justify-end gap-3 bg-white">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingCourse(null);
                  }}
                  className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 transition-all font-bold text-sm text-center cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-3 rounded-xl bg-charcoal text-white hover:brightness-110 active:scale-95 transition-all font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {isSaving ? 'Guardando...' : 'Guardar Curso'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

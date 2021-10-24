const RAIZ = 'https://proyectoeducacion-be31a-default-rtdb.firebaseio.com/';

export const fetchCourseDetail = async (id) => {
  try {
    const response = await fetch(`${RAIZ}cursos/${id}/lecciones.json`);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchCourses = async (id) => {
  try {
    const response = await fetch(`${RAIZ}cursos.json`);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchBecas = async (id) => {
  try {
    const response = await fetch(`${RAIZ}becas.json`);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchJobs = async () => {
  try {
    const response = await fetch(`${RAIZ}trabajos.json`);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const fetchJobDetail = async (id) => {
  try {
    const response = await fetch(`${RAIZ}trabajos/${id}.json`);
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};

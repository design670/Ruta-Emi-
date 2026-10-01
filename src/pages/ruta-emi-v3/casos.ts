// Casos clínicos Ruta EMI publicados por la SCP (https://scp.com.co/casos-ruta-emi/).
// Cada caso se resuelve en su página de la SCP; las fotografías son las de esa misma página.
import caso1 from '../../assets/v3/casos-scp/caso-1.webp';
import caso2 from '../../assets/v3/casos-scp/caso-2.webp';
import caso3 from '../../assets/v3/casos-scp/caso-3.jpg';
import caso4 from '../../assets/v3/casos-scp/caso-4.webp';
import caso5 from '../../assets/v3/casos-scp/caso-5.jpg';

export interface CasoScp {
  numero: number;
  /** Dirección de la página interna del caso: /ruta-emi-v3/casos-clinicos/<slug> */
  slug: string;
  titulo: string;
  resumen: string;
  url: string;
  imagen: string;
  /** object-position de la fotografía dentro de la tarjeta apaisada. */
  posicion: string;
  /** object-position en el hero de la página interna (formato mucho más apaisado). */
  posicionHero: string;
}

export const casosScp: CasoScp[] = [
  {
    numero: 1,
    slug: 'caso-1',
    titulo: 'Lactante de 11 meses: la consulta que parecía una virosis',
    resumen:
      'Niña de 11 meses, previamente sana, esquema PAI completo para la edad (en Colombia el PAI no incluye vacuna antimeningocócica). Asiste a un hogar comunitario con 12 niños. Sin antecedente de viaje ni de contacto con enfermos conocidos.',
    url: 'https://scp.com.co/casos-ruta-emi/caso-1-lactante-de-11-meses-la-consulta-que-parecia-una-virosis/',
    imagen: caso1,
    posicion: '25% 40%',
    posicionHero: '30% 42%',
  },
  {
    numero: 2,
    slug: 'caso-2',
    titulo: 'Escolar de 7 años: meningococemia fulminante sin meningitis',
    resumen:
      'Niño de 7 años, previamente sano, sin viajes recientes ni contactos enfermos conocidos. Vacunación del PAI completa.',
    url: 'https://scp.com.co/casos-ruta-emi/caso-2-escolar-de-7-anos-meningococemia-fulminante-sin-meningitis/',
    imagen: caso2,
    posicion: '50% 35%',
    posicionHero: '50% 28%',
  },
  {
    numero: 3,
    slug: 'caso-3',
    titulo: 'Adolescente de 18 años en población confinada: sepsis sin foco',
    resumen:
      'Hombre de 18 años, recluta en su cuarta semana de instrucción militar. Duerme en un alojamiento colectivo con 40 personas. Sin antecedentes patológicos. No ha recibido vacuna antimeningocócica.',
    url: 'https://scp.com.co/casos-ruta-emi/caso-3-adolescente-de-18-anos-en-poblacion-confinada-sepsis-sin-foco/',
    imagen: caso3,
    posicion: '35% 38%',
    posicionHero: '45% 30%',
  },
  {
    numero: 4,
    slug: 'caso-4',
    titulo: 'Mujer de 74 años: la EMI que no parece EMI',
    resumen:
      'Mujer de 74 años con diabetes mellitus tipo 2 (HbA1c 8,6 %) e hipertensión arterial. Vive sola y es funcionalmente independiente; su hija la visita cada dos días.',
    url: 'https://scp.com.co/casos-ruta-emi/caso-clinico-4/',
    imagen: caso4,
    posicion: '50% 62%',
    posicionHero: '50% 66%',
  },
  {
    numero: 5,
    slug: 'caso-5',
    titulo: 'Mujer de 29 años con embarazo de 28 semanas',
    resumen:
      'Mujer de 29 años, G2P1, con embarazo de 28 semanas y control prenatal completo, sin comorbilidades. Su hijo de 4 años asiste a un jardín infantil donde, cinco días antes, se notificó un caso de meningitis bacteriana en otro niño. El hijo cursó con un cuadro febril leve autolimitado y no recibió quimioprofilaxis.',
    url: 'https://scp.com.co/casos-ruta-emi/caso-5-mujer-de-29-anos-con-embarazo-de-28-semanas/',
    imagen: caso5,
    posicion: '50% 55%',
    posicionHero: '50% 46%',
  },
];

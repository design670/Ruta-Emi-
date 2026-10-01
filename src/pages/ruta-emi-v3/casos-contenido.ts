// Contenido oficial de cada caso, tomado de https://scp.com.co/casos-ruta-emi/ (Sociedad Colombiana de Pediatría).
// Archivo generado: ficha del paciente, relato clínico, figuras, tablas y preguntas del test de cada caso.
// El formulario de registro y el envío de respuestas se mantienen en la página de la SCP.

export type Bloque =
  | { t: 'titulo'; texto: string }
  | { t: 'p'; html: string }
  | { t: 'pie'; html: string }
  | { t: 'tablaTitulo'; texto: string }
  | { t: 'tabla'; html: string }
  | { t: 'figura'; src: string }
  | { t: 'ul' | 'ol'; items: string[] };

export interface PreguntaTest {
  pregunta: string;
  opciones: string[];
}

export interface FichaItem {
  etiqueta: string;
  valor: string;
}

export interface ContenidoCaso {
  /** Ficha del paciente que la SCP muestra justo debajo del título. */
  ficha: FichaItem[];
  bloques: Bloque[];
  invitacion: string;
  preguntas: PreguntaTest[];
}

export const contenidoCasos: Record<string, ContenidoCaso> = {
  "caso-1": {
    "ficha": [
      {
        "etiqueta": "Edad",
        "valor": "11 meses"
      },
      {
        "etiqueta": "Natural y procedente",
        "valor": "No registra"
      },
      {
        "etiqueta": "Sexo",
        "valor": "Femenino"
      },
      {
        "etiqueta": "Fecha de ingreso",
        "valor": "No registra"
      },
      {
        "etiqueta": "Motivo de consulta",
        "valor": "Fiebre y vómito"
      }
    ],
    "bloques": [
      {
        "t": "titulo",
        "texto": "Datos generales"
      },
      {
        "t": "p",
        "html": "Niña de 11 meses, previamente sana, esquema PAI completo para la edad (en Colombia el PAI no incluye vacuna antimeningocócica). Asiste a un hogar comunitario con 12 niños. Sin antecedente de viaje ni de contacto con enfermos conocidos."
      },
      {
        "t": "titulo",
        "texto": "Primera consulta"
      },
      {
        "t": "p",
        "html": "<strong>02:10 h, cerca de cinco horas de evolución.</strong> Consulta por fiebre y vómito. La madre refiere temperatura de 38,9 °C desde las 21:00, dos episodios de vómito y llanto más intenso de lo habitual. Al examen: alerta, consolable en brazos de la madre, T 38,7 °C, FC 168 lpm, FR 40 rpm, SatO₂ 97 %, llenado capilar 2 s, fontanela normotensa y orofaringe sin hallazgos. No se desviste por completo a la paciente y no se registra el color de la piel, ni la temperatura de las extremidades. Se administra acetaminofén y se da salida con diagnóstico de síndrome febril sin foco de probable origen viral e indicaciones verbales de reconsulta."
      },
      {
        "t": "titulo",
        "texto": "Segunda consulta"
      },
      {
        "t": "p",
        "html": "<strong>11:05 h, cerca de 14 horas de evolución.</strong> La madre regresa porque “no la puedo despertar bien” y la niña rechaza por completo el alimento. Refiere que las manos y los pies están fríos desde la madrugada. Al examen: somnolienta, irritable al manipularla, sin sonrisa social. T 39,4 °C, FC 192 lpm, FR 56 rpm, TA 72/38 mmHg, SatO₂ 94 %, llenado capilar 4 s, extremidades frías, piel moteada en muslos, fontanela abombada e hipotonía axial. Se observan tres lesiones puntiformes violáceas en el flanco derecho que no palidecen con la digitopresión."
      },
      {
        "t": "figura",
        "src": "/casos-scp/figura-caso-1.jpg"
      },
      {
        "t": "pie",
        "html": "<em>Figura 1. Reloj clínico de la enfermedad meningocócica en niños y adolescentes. Elaboración propia a partir de los tiempos medianos de aparición descritos por Thompson MJ et al., Lancet 2006.</em>"
      },
      {
        "t": "tablaTitulo",
        "texto": "Tabla 1.1. Paraclínicos iniciales de la segunda consulta"
      },
      {
        "t": "tabla",
        "html": "<table><thead><tr><th><strong>Estudio</strong></th><th><strong>Resultado</strong></th><th><strong>Comentario</strong></th></tr></thead><tbody><tr><td><strong>Leucocitos</strong></td><td>3 900/µL (78 % neutrófilos, 12 % bandas)</td><td>Leucopenia con desviación a la izquierda: marcador de gravedad, no de ausencia de infección</td></tr><tr><td><strong>Plaquetas</strong></td><td>96 000/µL</td><td>Consumo por coagulopatía incipiente</td></tr><tr><td><strong>PCR</strong></td><td>187 mg/L</td><td>Elevada, pero un valor normal no descartaría EMI en fase temprana</td></tr><tr><td><strong>Lactato arterial</strong></td><td>3,8 mmol/L</td><td>Hipoperfusión establecida</td></tr><tr><td><strong>Glucemia</strong></td><td>61 mg/dL</td><td>Hipoglucemia límite; corregir</td></tr><tr><td><strong>INR</strong></td><td>1,6</td><td>Coagulopatía: valorar antes de la punción lumbar</td></tr></tbody></table>"
      },
      {
        "t": "tablaTitulo",
        "texto": "Tabla 1.2. Citoquímico y Gram del LCR, obtenido tras la estabilización"
      },
      {
        "t": "tabla",
        "html": "<table><thead><tr><th><strong>Parámetro</strong></th><th><strong>Resultado de la paciente</strong></th><th><strong>Criterio de citoquímico compatible (INS)</strong></th></tr></thead><tbody><tr><td><strong>Aspecto</strong></td><td>Turbio</td><td>LCR turbio</td></tr><tr><td><strong>Leucocitos</strong></td><td>2 850/mm³ (92 % PMN)</td><td>Mayor de 100/mm³ con ≥ 80 % de neutrófilos</td></tr><tr><td><strong>Proteínas</strong></td><td>214 mg/dL</td><td>Mayor de 100 mg/dL</td></tr><tr><td><strong>Glucosa</strong></td><td>18 mg/dL (glucemia simultánea 96 mg/dL; índice 0,19)</td><td>Menor de 40 mg/dL</td></tr><tr><td><strong>Gram</strong></td><td>Diplococos gramnegativos intra y extracelulares</td><td>Gram positivo para bacterias</td></tr><tr><td><strong>Panel molecular de LCR</strong></td><td>Neisseria meningitidis detectada</td><td>RT-PCR positiva confirma el caso</td></tr></tbody></table>"
      }
    ],
    "invitacion": "Te invitamos a diligenciar el siguiente formulario y proceder con el test del caso clínico, para brindarte retroalimentación:",
    "preguntas": [
      {
        "pregunta": "1. En la primera consulta, con cinco horas de evolución y un examen sin foco, ¿cuál es la conducta más razonable?",
        "opciones": [
          "A. Dar salida con acetaminofén e indicaciones verbales de “volver si empeora”.",
          "B. Iniciar ceftriaxona empírica en todo lactante febril sin foco.",
          "C. Desvestir por completo a la paciente y buscar dirigidamente los signos precoces de sepsis (color de la piel, temperatura de manos y pies, llenado capilar), reevaluar después del antipirético, dejar los hallazgos documentados y entregar signos de alarma por escrito con reconsulta abierta.",
          "D. Solicitar tomografía de cráneo antes de tomar cualquier decisión."
        ]
      },
      {
        "pregunta": "2. En la reconsulta, con fontanela abombada, petequias, llenado capilar de cuatro segundos e hipotensión, ¿cuál es la secuencia correcta?",
        "opciones": [
          "A. Punción lumbar inmediata y antibiótico según el resultado del citoquímico.",
          "B. Esperar el hemograma y la PCR para decidir si se trata de una infección bacteriana.",
          "C. Accesos vasculares, hemocultivos, bolo de cristaloide con reevaluación y ceftriaxona dentro de la primera hora; punción lumbar cuando la condición hemodinámica y la coagulación lo permitan.",
          "D. Antibiótico oral en observación y remisión programada."
        ]
      },
      {
        "pregunta": "3. ¿Cuál es el tratamiento antimicrobiano empírico apropiado en un lactante de 11 meses con sospecha de meningitis bacteriana o EMI?",
        "opciones": [
          "A. Cefalosporina de tercera generación a dosis meníngeas (ceftriaxona 100 mg/kg/día o cefotaxima 300 mg/kg/día), asociada a vancomicina mientras no se descarte neumococo con sensibilidad disminuida.",
          "B. Amoxicilina oral a dosis altas.",
          "C. Vancomicina en monoterapia.",
          "D. Meropenem más ampicilina como esquema empírico de rutina."
        ]
      },
      {
        "pregunta": "4. Con el Gram y el citoquímico descritos, ¿cómo se clasifica el caso para la vigilancia en salud pública y qué falta por hacer?",
        "opciones": [
          "A. Caso descartado hasta que crezca el cultivo.",
          "B. Caso probable de enfermedad meningocócica. Se confirma con cultivo, antigenemia o RT-PCR positiva para N. meningitidis en LCR, sangre u otro líquido estéril, y el aislamiento debe enviarse al INS para serogrupado.",
          "C. Caso confirmado por el solo hallazgo de fontanela abombada y petequias.",
          "D. No requiere notificación hasta conocer el serogrupo."
        ]
      },
      {
        "pregunta": "5. ¿Cómo se manejan los contactos del hogar comunitario y de la familia?",
        "opciones": [
          "A. Tomar cultivos nasofaríngeos a los contactos y dar profilaxis solo a los portadores.",
          "B. Quimioprofilaxis al 100 % de los contactos estrechos (convivientes, cuidadores y niños del hogar comunitario), idealmente dentro de las primeras 24 a 48 horas e independientemente del estado de vacunación; rifampicina 10 mg/kg/dosis cada 12 horas por dos días (máximo 600 mg) en mayores de 1 mes y menos de 25 kg; aislamiento por gotas del caso hasta 24 horas después de iniciado el antibiótico y seguimiento de contactos durante 10 días.",
          "C. Profilaxis solo a los convivientes, nunca al personal del hogar comunitario.",
          "D. Esperar la confirmación por cultivo antes de iniciar cualquier profilaxis."
        ]
      }
    ]
  },
  "caso-2": {
    "ficha": [
      {
        "etiqueta": "Edad",
        "valor": "7 años"
      },
      {
        "etiqueta": "Natural y procedente",
        "valor": "No registra"
      },
      {
        "etiqueta": "Sexo",
        "valor": "Masculino"
      },
      {
        "etiqueta": "Fecha de ingreso",
        "valor": "No registra"
      },
      {
        "etiqueta": "Motivo de consulta",
        "valor": "“El niño está de un color raro y no responde igual”"
      }
    ],
    "bloques": [
      {
        "t": "titulo",
        "texto": "Datos generales"
      },
      {
        "t": "p",
        "html": "Niño de 7 años, previamente sano, sin viajes recientes ni contactos enfermos conocidos. Vacunación del PAI completa."
      },
      {
        "t": "titulo",
        "texto": "Inicio"
      },
      {
        "t": "p",
        "html": "<strong>20:00 h.</strong> Fiebre de 39,5 °C, cefalea leve y dolor intenso en ambas pantorrillas, hasta el punto de negarse a caminar. Los padres lo atribuyen al partido de fútbol de la tarde."
      },
      {
        "t": "titulo",
        "texto": "Consulta"
      },
      {
        "t": "p",
        "html": "<strong>02:10 h, cerca de seis horas de evolución.</strong> Los padres consultan porque el niño “está de un color raro y no responde igual”. Al examen: T 39,8 °C, FC 168 lpm, TA 78/38 mmHg (PAM 51), FR 38 rpm, SatO₂ 95 %, llenado capilar 5 s, extremidades frías hasta las rodillas, livedo reticularis, pulsos periféricos débiles y Glasgow 13. No hay rigidez de nuca ni otros signos meníngeos."
      },
      {
        "t": "titulo",
        "texto": "Evolución de la piel"
      },
      {
        "t": "p",
        "html": "Petequias en flancos y axilas que, durante los primeros 30 minutos de observación, confluyen en placas equimóticas de bordes irregulares en muslos y glúteos."
      },
      {
        "t": "titulo",
        "texto": "Paraclínicos"
      },
      {
        "t": "p",
        "html": "Lactato 6,2 mmol/L; plaquetas 62 000/µL; INR 2,1; fibrinógeno 88 mg/dL; dímero D muy elevado; glucemia 48 mg/dL; pH 7,21 con bicarbonato 13 mmol/L; PCR 240 mg/L. Se toman hemocultivos al ingreso."
      },
      {
        "t": "figura",
        "src": "/casos-scp/figura-caso-2.jpg"
      },
      {
        "t": "pie",
        "html": "<em>Figura 1. Trayectoria del lactato, de la presión arterial media y del llenado capilar del paciente durante las primeras 12 horas, con el momento de las intervenciones. Datos del caso.</em>"
      },
      {
        "t": "tablaTitulo",
        "texto": "Tabla 1.1. Situaciones en las que se difiere la punción lumbar (pero nunca el antibiótico)"
      },
      {
        "t": "tabla",
        "html": "<table><thead><tr><th><strong>Situación</strong></th><th><strong>Razón para diferir</strong></th></tr></thead><tbody><tr><td><strong>Choque o inestabilidad hemodinámica</strong></td><td>Riesgo de deterioro durante el procedimiento y demora del tratamiento</td></tr><tr><td><strong>Coagulopatía o trombocitopenia significativa</strong></td><td>Riesgo de hematoma espinal</td></tr><tr><td><strong>Signos de hipertensión endocraneana o focalización neurológica</strong></td><td>Riesgo de herniación</td></tr><tr><td><strong>Deterioro rápido del estado de conciencia</strong></td><td>La prioridad es la vía aérea y la perfusión</td></tr><tr><td><strong>Infección de la piel en el sitio de punción</strong></td><td>Riesgo de inoculación</td></tr><tr><td><strong>En todos estos escenarios</strong></td><td>Hemocultivo y PCR en sangre, antibiótico dentro de la primera hora y punción lumbar diferida hasta que el paciente la tolere</td></tr></tbody></table>"
      }
    ],
    "invitacion": "Te invitamos a diligenciar el siguiente formulario y proceder con el test del caso clínico, para brindarte retroalimentación:",
    "preguntas": [
      {
        "pregunta": "1. ¿Debe realizarse la punción lumbar antes de administrar el antibiótico?",
        "opciones": [
          "A. Sí, siempre, porque sin LCR no se confirma el diagnóstico. Retroalimentación: El diagnóstico puede confirmarse por hemocultivo o PCR en sangre.",
          "B. No. Hay choque y coagulopatía: se difiere la punción lumbar, se toman hemocultivos y PCR en sangre, y el antibiótico se administra dentro de la primera hora.",
          "C. No es necesaria nunca en la meningococemia.",
          "D. Se realiza únicamente después de una tomografía de cráneo en todos los casos."
        ]
      },
      {
        "pregunta": "2. ¿Cuál es la conducta de reanimación inicial más apropiada?",
        "opciones": [
          "A. Bolos de cristaloide de 10 a 20 mL/kg con reevaluación clínica después de cada bolo, corrección de la hipoglucemia, antibiótico dentro de la primera hora e inicio precoz de vasoactivo si persiste la hipoperfusión pese a la carga de líquidos; traslado a unidad de cuidado intensivo pediátrico.",
          "B. Restricción hídrica por el riesgo de edema cerebral.",
          "C. Albúmina como líquido de primera línea en todos los casos.",
          "D. Esperar a completar 60 mL/kg antes de considerar cualquier vasoactivo."
        ]
      },
      {
        "pregunta": "3. ¿Está indicada la dexametasona adyuvante en este paciente?",
        "opciones": [
          "A. Sí, en todos los pacientes con enfermedad meningocócica, para reducir la mortalidad.",
          "B. El beneficio demostrado de la dexametasona está sobre todo en la meningitis por Haemophilus influenzae tipo b en niños y por neumococo en adultos. En la enfermedad meningocócica no se ha demostrado beneficio significativo; si se inició empíricamente ante la sospecha de meningitis bacteriana, puede suspenderse al identificar el meningococo. En el choque refractario a catecolaminas lo que se considera es hidrocortisona, no dexametasona.",
          "C. Está formalmente contraindicada en toda meningitis bacteriana.",
          "D. Debe iniciarse 24 horas después del antibiótico."
        ]
      },
      {
        "pregunta": "4. A las ocho horas persiste hipotensión refractaria a catecolaminas, con hiponatremia e hipoglucemia recurrente. ¿Qué complicación debe sospechar?",
        "opciones": [
          "A. Síndrome de Waterhouse-Friderichsen: hemorragia suprarrenal con insuficiencia suprarrenal aguda, descrita en la meningococemia fulminante. En el choque resistente a catecolaminas se considera hidrocortisona.",
          "B. Diabetes insípida central.",
          "C. Crisis tirotóxica.",
          "D. Intoxicación por acetaminofén."
        ]
      },
      {
        "pregunta": "5. ¿A qué miembros del equipo de salud se les indica quimioprofilaxis?",
        "opciones": [
          "A. A todo el personal que atendió al paciente en urgencias.",
          "B. Solo a quienes tuvieron exposición directa y sin protección a las secreciones respiratorias del paciente: intubación, aspiración de la vía aérea, ventilación boca a boca o examen orofaríngeo cercano sin mascarilla.",
          "C. A nadie: el personal de salud nunca requiere profilaxis.",
          "D. A todo el personal, pero solo si el cultivo confirma el serogrupo B."
        ]
      }
    ]
  },
  "caso-3": {
    "ficha": [
      {
        "etiqueta": "Edad",
        "valor": "18 años"
      },
      {
        "etiqueta": "Natural y procedente",
        "valor": "No registra"
      },
      {
        "etiqueta": "Sexo",
        "valor": "Masculino"
      },
      {
        "etiqueta": "Fecha de ingreso",
        "valor": "No registra"
      },
      {
        "etiqueta": "Motivo de consulta",
        "valor": "“Cuadro viral”: cefalea, fiebre, vómito y dolor muscular, especialmente en las pantorrillas"
      }
    ],
    "bloques": [
      {
        "t": "titulo",
        "texto": "Datos generales"
      },
      {
        "t": "p",
        "html": "Hombre de 18 años, recluta en su cuarta semana de instrucción militar. Duerme en un alojamiento colectivo con 40 personas. Sin antecedentes patológicos. No ha recibido vacuna antimeningocócica."
      },
      {
        "t": "titulo",
        "texto": "Consulta"
      },
      {
        "t": "p",
        "html": "<strong>04:30 h.</strong> Acude a la enfermería del batallón por cefalea intensa, fiebre, vómito y dolor muscular difuso, especialmente marcado en las pantorrillas. El cuadro se atribuye a deshidratación por el entrenamiento del día anterior y a un “cuadro viral” que circula en la unidad. Al examen: T 39,2 °C, FC 128 lpm, TA 108/60 mmHg, FR 24 rpm, llenado capilar 3 s, manos y pies fríos, alerta y orientado. No hay rigidez de nuca; Kernig y Brudzinski negativos. No se desviste al paciente. Recibe hidratación oral, un analgésico y una dosis de antibiótico oral, y se deja en observación."
      },
      {
        "t": "titulo",
        "texto": "Evolución"
      },
      {
        "t": "p",
        "html": "<strong>08:00 h.</strong> Persiste febril y taquicárdico. Al ayudarlo a bañarse se observan petequias en tobillos, pliegue axilar y flancos, que no palidecen con la diascopia. TA 92/48 mmHg y llenado capilar 4 s. Se traslada al hospital de referencia, donde recibe ceftriaxona y se toman hemocultivos."
      },
      {
        "t": "titulo",
        "texto": "Laboratorio"
      },
      {
        "t": "p",
        "html": "El hemocultivo, tomado después de la dosis de antibiótico recibida en la enfermería, resulta negativo a las 48 horas. La RT-PCR en sangre detecta <em>Neisseria meningitidis; </em>el serogrupado informa serogrupo C."
      },
      {
        "t": "figura",
        "src": "/casos-scp/figura-caso-3.jpg"
      },
      {
        "t": "pie",
        "html": "<em>Figura 1. Prueba del vaso o diascopia. Esquema original. Se presiona un vidrio transparente sobre la lesión: si no palidece, hay sangre extravasada. Un exantema que palidece no descarta EMI si el estado general es malo.</em>"
      },
      {
        "t": "tablaTitulo",
        "texto": "Tabla 1.1. Diagnóstico diferencial del síndrome febril con exantema petequial en el contexto colombiano"
      },
      {
        "t": "tabla",
        "html": "<table><thead><tr><th><strong>Entidad</strong></th><th><strong>Elementos a favor</strong></th><th><strong>Elementos que la diferencian</strong></th></tr></thead><tbody><tr><td><strong>Enfermedad meningocócica</strong></td><td>Progresión en horas, extremidades frías, llenado capilar prolongado y lesiones que confluyen</td><td>Puede cursar sin ningún signo meníngeo, sobre todo en el adolescente</td></tr><tr><td><strong>Dengue con signos de alarma</strong></td><td>Zona endémica, mialgias intensas, trombocitopenia y prueba del torniquete positiva</td><td>Las petequias suelen ser difusas y no confluyen en horas; el deterioro aparece con la defervescencia</td></tr><tr><td><strong>Rickettsiosis</strong></td><td>Exantema que compromete palmas y plantas, antecedente rural o contacto con garrapatas</td><td>Evolución habitualmente menos acelerada</td></tr><tr><td><strong>Leptospirosis</strong></td><td>Contacto con aguas contaminadas o roedores, ictericia y mialgias</td><td>Es infrecuente la púrpura de progresión rápida</td></tr><tr><td><strong>Púrpura trombocitopénica inmune</strong></td><td>Petequias y equimosis</td><td>Sin fiebre alta ni compromiso hemodinámico</td></tr></tbody></table>"
      }
    ],
    "invitacion": "Te invitamos a diligenciar el siguiente formulario y proceder con el test del caso clínico, para brindarte retroalimentación:",
    "preguntas": [
      {
        "pregunta": "1. ¿Cuál es el hallazgo que con mayor fuerza debía haber activado el código EMI a las 04:30 h?",
        "opciones": [
          "A. La cefalea intensa.",
          "B. La ausencia de rigidez de nuca.",
          "C. La combinación de fiebre alta, taquicardia desproporcionada, dolor muscular intenso en las piernas y extremidades frías con llenado capilar prolongado en un joven previamente sano.",
          "D. El antecedente de entrenamiento físico intenso."
        ]
      },
      {
        "pregunta": "2. En una unidad militar, ¿cómo se define este evento desde el punto de vista de la vigilancia en salud pública?",
        "opciones": [
          "A. Se requieren dos o más casos confirmados para hablar de brote, igual que en población general.",
          "B. En poblaciones confinadas -unidades militares, centros penitenciarios, internados y centros de protección- un solo caso configura brote.",
          "C. La definición de brote no aplica en instituciones.",
          "D. Solo se considera brote si el serogrupo es C."
        ]
      },
      {
        "pregunta": "3. El hemocultivo es negativo tras el antibiótico previo. ¿Cómo se confirma el caso?",
        "opciones": [
          "A. Se descarta el caso por cultivo negativo.",
          "B. Con cultivo, antigenemia o RT-PCR positiva para N. meningitidis en LCR, sangre u otro líquido corporal estéril: la PCR permanece positiva pese al antibiótico previo.",
          "C. Solo con cultivo positivo; la PCR no es criterio de confirmación.",
          "D. Con serología en fase convaleciente."
        ]
      },
      {
        "pregunta": "4. ¿Cuál es la conducta correcta de quimioprofilaxis y seguimiento en la unidad?",
        "opciones": [
          "A. Profilaxis a los contactos estrechos, incluidos los compañeros del alojamiento colectivo, con seguimiento durante 20 días por tratarse de población confinada.",
          "B. Profilaxis únicamente a la familia del paciente.",
          "C. Profilaxis a todo el batallón, sin distinción.",
          "D. Seguimiento de 10 días, igual que en población general."
        ]
      },
      {
        "pregunta": "5. ¿Qué es correcto afirmar sobre la vacunación antimeningocócica en este contexto?",
        "opciones": [
          "A. El PAI colombiano incluye vacuna antimeningocócica para adolescentes, de modo que no hay nada adicional que hacer.",
          "B. El PAI no la incluye de forma rutinaria. Ante un brote, el biológico recomendado para Colombia es el que cubra los serogrupos B, C y Y, y la vacunación se define con la autoridad sanitaria. De forma independiente, existen grupos con indicación de vacunación por riesgo: asplenia anatómica o funcional, deficiencia de componentes del complemento, uso de inhibidores del complemento, infección por VIH, microbiólogos expuestos, viajeros a zonas hiperendémicas, reclutas y estudiantes que viven en residencias.",
          "C. La vacunación sustituye la quimioprofilaxis de los contactos.",
          "D. La vacunación solo se indica cuando hay más de diez casos."
        ]
      }
    ]
  },
  "caso-4": {
    "ficha": [
      {
        "etiqueta": "Edad",
        "valor": "74 años"
      },
      {
        "etiqueta": "Natural y procedente",
        "valor": "No registra"
      },
      {
        "etiqueta": "Sexo",
        "valor": "Femenino"
      },
      {
        "etiqueta": "Fecha de ingreso",
        "valor": "No registra"
      },
      {
        "etiqueta": "Motivo de consulta",
        "valor": "Desorientada en tiempo, lenguaje incoherente y menor ingesta. Tos leve"
      }
    ],
    "bloques": [
      {
        "t": "titulo",
        "texto": "Datos generales"
      },
      {
        "t": "p",
        "html": "Mujer de 74 años con diabetes mellitus tipo 2 (HbA1c 8,6 %) e hipertensión arterial. Vive sola y es funcionalmente independiente; su hija la visita cada dos días."
      },
      {
        "t": "titulo",
        "texto": "Día 1"
      },
      {
        "t": "p",
        "html": "<strong>16:00 h.</strong> La hija la encuentra desorientada en tiempo, con lenguaje incoherente intermitente y menor ingesta desde la noche anterior. Refiere tos leve de tres días. En urgencias: T 37,6 °C, FC 104 lpm, TA 118/64 mmHg, FR 24 rpm, SatO₂ 92 % al aire ambiente y glucemia capilar 268 mg/dL. Desorientada en tiempo y lugar, sin déficit motor, sin rigidez de nuca y sin exantema. Crepitantes en la base derecha. La radiografía de tórax muestra una opacidad de aspecto alveolar en el lóbulo inferior derecho. Se interpreta como neumonía adquirida en la comunidad con descompensación hiperglucémica y se inicia ampicilina/sulbactam más claritromicina."
      },
      {
        "t": "titulo",
        "texto": "Día 2"
      },
      {
        "t": "p",
        "html": "<strong>10:00 h, 18 horas después.</strong> Deterioro del estado de conciencia con Glasgow 11, FC 118 lpm, TA 96/52 mmHg y lactato 3,1 mmol/L. Se decide realizar punción lumbar."
      },
      {
        "t": "titulo",
        "texto": "Laboratorio"
      },
      {
        "t": "p",
        "html": "LCR de aspecto ligeramente opalescente, con 180 leucocitos/mm³ (78 % PMN), proteínas 145 mg/dL y glucosa 34 mg/dL con glucemia simultánea de 268 mg/dL, lo que da un índice glucorraquia/glucemia de 0,13. El Gram no muestra gérmenes. Los hemocultivos tomados el día uno informan diplococos gramnegativos, con identificación final de Neisseria meningitidis serogrupo Y."
      },
      {
        "t": "figura",
        "src": "/casos-scp/figura-caso-4.jpg"
      },
      {
        "t": "pie",
        "html": "<em>Figura 1. Citoquímico del LCR de la paciente frente a los criterios de citoquímico compatible del protocolo 535 del INS. Datos del caso.</em>"
      },
      {
        "t": "tablaTitulo",
        "texto": "Tabla 1.1. Tratamiento empírico de la meningitis bacteriana adquirida en la comunidad según el grupo de edad"
      },
      {
        "t": "tabla",
        "html": "<table><thead><tr><th><strong>Grupo</strong></th><th><strong>Esquema empírico habitual</strong></th><th><strong>Razón</strong></th></tr></thead><tbody><tr><td><strong>Menor de 1 mes</strong></td><td>Ampicilina + cefotaxima (o aminoglucósido)</td><td>Cobertura de <em>S. agalactiae</em>, <em>E. coli</em> y <em>Listeria monocytogenes</em></td></tr><tr><td><strong>1 mes a 50 años</strong></td><td>Cefalosporina de tercera generación + vancomicina</td><td>Neumococo con sensibilidad disminuida y meningococo</td></tr><tr><td><strong>Mayor de 50 años o inmunosupresión</strong></td><td>Cefalosporina de tercera generación + vancomicina + ampicilina</td><td>Se agrega cobertura para <em>Listeria monocytogenes</em></td></tr><tr><td><strong>Todos</strong></td><td>Verifique siempre las dosis meníngeas y la epidemiología local de resistencia</td><td>El esquema empírico se ajusta al identificar el germen</td></tr></tbody></table>"
      }
    ],
    "invitacion": "Te invitamos a diligenciar el siguiente formulario y proceder con el test del caso clínico, para brindarte retroalimentación:",
    "preguntas": [
      {
        "pregunta": "1. ¿Cuál es la mejor explicación del retraso diagnóstico en esta paciente?",
        "opciones": [
          "A. Que la paciente no tenía una infección bacteriana al ingreso.",
          "B. Que en el adulto mayor la EMI puede cursar sin fiebre alta y sin rigidez de nuca, con la confusión como manifestación dominante, y que el serogrupo Y se asocia con presentaciones respiratorias y bacteriémicas sin meningismo.",
          "C. Que la radiografía de tórax era normal.",
          "D. Que no se tomó tomografía de cráneo al ingreso."
        ]
      },
      {
        "pregunta": "2. ¿Cómo se interpreta la glucorraquia en una paciente hiperglucémica?",
        "opciones": [
          "A. Una glucorraquia de 34 mg/dL es normal porque la paciente es diabética.",
          "B. Debe usarse el índice glucorraquia/glucemia. En esta paciente es de 0,13, muy por debajo de 0,4, lo que apoya una etiología bacteriana aunque el valor absoluto no parezca alarmante.",
          "C. La celularidad de 180/mm³ descarta la meningitis bacteriana.",
          "D. Un Gram negativo descarta el diagnóstico."
        ]
      },
      {
        "pregunta": "3. ¿Cómo debe ajustarse el tratamiento antimicrobiano en el momento de la punción lumbar?",
        "opciones": [
          "A. Continuar con ampicilina/sulbactam y claritromicina.",
          "B. Cambiar a cefalosporina de tercera generación a dosis meníngeas más vancomicina, y añadir ampicilina por tratarse de una paciente mayor de 50 años; luego ajustar al confirmar N. meningitidis.",
          "C. Vancomicina en monoterapia.",
          "D. Esperar el resultado del cultivo de LCR antes de cambiar el esquema."
        ]
      },
      {
        "pregunta": "4. ¿Qué es correcto respecto a la dexametasona adyuvante en esta paciente?",
        "opciones": [
          "A. Nunca debe usarse en el adulto mayor.",
          "B. Ante la sospecha de meningitis bacteriana adquirida en la comunidad se inicia antes o junto con la primera dosis de antibiótico (10 mg IV cada seis horas durante cuatro días). El beneficio demostrado es mayor en la meningitis neumocócica; identificado el meningococo, varias guías permiten suspenderla porque el beneficio no está demostrado en EMI.",
          "C. Se inicia al segundo día para reducir las secuelas.",
          "D. Se prefiere prednisolona oral."
        ]
      },
      {
        "pregunta": "5. Antes del egreso, ¿qué debe garantizarse?",
        "opciones": [
          "A. Notificar el caso a SIVIGILA, censar los contactos estrechos (hija, nietos y cualquier persona expuesta a secreciones), administrar quimioprofilaxis y solicitar evaluación auditiva a la paciente.",
          "B. No se requiere notificación en adultos.",
          "C. La paciente, por haber recibido tratamiento, nunca requiere erradicación nasofaríngea.",
          "D. No hay riesgo para la familia porque la paciente vive sola."
        ]
      }
    ]
  },
  "caso-5": {
    "ficha": [
      {
        "etiqueta": "Edad",
        "valor": "29 años"
      },
      {
        "etiqueta": "Natural y procedente",
        "valor": "No registra"
      },
      {
        "etiqueta": "Sexo",
        "valor": "Femenino"
      },
      {
        "etiqueta": "Fecha de ingreso",
        "valor": "No registra"
      },
      {
        "etiqueta": "Motivo de consulta",
        "valor": "Fiebre, cefalea, mialgias y “manchitas” en la piel que notó al vestirse"
      }
    ],
    "bloques": [
      {
        "t": "titulo",
        "texto": "Datos generales"
      },
      {
        "t": "p",
        "html": "Mujer de 29 años, G2P1, con embarazo de 28 semanas y control prenatal completo, sin comorbilidades. Su hijo de 4 años asiste a un jardín infantil donde, cinco días antes, se notificó un caso de meningitis bacteriana en otro niño. El hijo cursó con un cuadro febril leve autolimitado y no recibió quimioprofilaxis."
      },
      {
        "t": "titulo",
        "texto": "Consulta"
      },
      {
        "t": "p",
        "html": "<strong>06:00 h.</strong> Fiebre de 39,1 °C de aproximadamente 10 horas de evolución, cefalea, mialgias intensas y “manchitas” en las piernas que notó al vestirse. Al examen: T 39,1 °C, FC 122 lpm, TA 96/54 mmHg, FR 24 rpm, SatO₂ 96 %, llenado capilar 3 s, manos frías. No hay rigidez de nuca. Se observan petequias en tobillos, muslos y flancos que no palidecen con la diascopia."
      },
      {
        "t": "titulo",
        "texto": "Valoración obstétrica"
      },
      {
        "t": "p",
        "html": "Altura uterina acorde con la edad gestacional, sin dinámica uterina, sin sangrado ni hidrorrea. Frecuencia cardíaca fetal de 178 lpm, con variabilidad disminuida en la monitoría."
      },
      {
        "t": "titulo",
        "texto": "Paraclínicos"
      },
      {
        "t": "p",
        "html": "Leucocitos 2 800/µL con 15 % de bandas, plaquetas 108 000/µL, lactato 3,4 mmol/L, PCR 210 mg/L."
      },
      {
        "t": "figura",
        "src": "/casos-scp/figura-caso-5.jpg"
      },
      {
        "t": "pie",
        "html": "<em>Figura 1. Línea de tiempo de las acciones de salud pública ante un caso probable o confirmado de enfermedad meningocócica. Elaboración propia a partir del protocolo 535 del INS.</em>"
      },
      {
        "t": "tablaTitulo",
        "texto": "Tabla 1.1. Quimioprofilaxis de contactos estrechos de enfermedad meningocócica (protocolo 535 del INS, Colombia)"
      },
      {
        "t": "tabla",
        "html": "<table><thead><tr><th><strong>Peso o edad</strong></th><th><strong>Antibiótico y dosis</strong></th><th><strong>Duración</strong></th><th><strong>Alternativas</strong></th></tr></thead><tbody><tr><td><strong>Menor de 1 mes</strong></td><td>Rifampicina 5 mg/kg/dosis vía oral cada 12 horas</td><td>2 días</td><td>Azitromicina 10 mg/kg en dosis única si no hay rifampicina disponible en 24 a 48 horas</td></tr><tr><td><strong>Mayor de 1 mes y hasta 25 kg</strong></td><td>Rifampicina 10 mg/kg/dosis vía oral cada 12 horas (máximo 600 mg)</td><td>2 días</td><td>Azitromicina 10 mg/kg en dosis única; ceftriaxona 125 mg IM en dosis única en menores de 15 años</td></tr><tr><td><strong>De 25 kg a 50 kg</strong></td><td>Rifampicina 300 mg vía oral cada 12 horas</td><td>2 días</td><td>Ciprofloxacina 500 mg vía oral en dosis única, si no hay resistencia documentada a fluoroquinolonas</td></tr><tr><td><strong>Mayor de 50 kg</strong></td><td>Rifampicina 600 mg vía oral cada 12 horas</td><td>2 días</td><td>Ceftriaxona 250 mg IM en dosis única en mayores de 15 años; ciprofloxacina 500 mg vía oral en dosis única</td></tr><tr><td><strong>Gestantes</strong></td><td>Ceftriaxona 250 mg intramuscular</td><td>Dosis única</td><td>Es el antibiótico de elección en el embarazo según el protocolo nacional</td></tr></tbody></table>"
      }
    ],
    "invitacion": "Te invitamos a diligenciar el siguiente formulario y proceder con el test del caso clínico, para brindarte retroalimentación:",
    "preguntas": [
      {
        "pregunta": "1. ¿Cuál es el tratamiento inicial correcto para esta gestante?",
        "opciones": [
          "A. Diferir el antibiótico hasta descartar dengue.",
          "B. Reanimación con cristaloides, hemocultivos y ceftriaxona a dosis meníngeas (2 g IV cada 12 horas) dentro de la primera hora, con monitoría fetal continua. El embarazo no modifica la urgencia ni la elección del antibiótico.",
          "C. Iniciar antibiótico oral por seguridad fetal.",
          "D. Cesárea de urgencia como primera medida."
        ]
      },
      {
        "pregunta": "2. Su hermana, de 31 años, es contacto estrecho, toma anticonceptivos orales combinados y recibirá rifampicina como quimioprofilaxis. ¿Qué debe advertírsele?",
        "opciones": [
          "A. Nada en particular; no hay interacciones relevantes.",
          "B. Que la rifampicina induce el metabolismo hepático y reduce la eficacia de los anticonceptivos hormonales, por lo que debe usar un método adicional de barrera durante el tratamiento y en las semanas siguientes. Además tiñe de naranja la orina, el sudor y las lágrimas, y puede manchar de forma permanente los lentes de contacto blandos.",
          "C. Que debe suspender el anticonceptivo de forma definitiva.",
          "D. Que la rifampicina está contraindicada en mujeres en edad fértil."
        ]
      },
      {
        "pregunta": "3. Una compañera de trabajo de la paciente, con embarazo de 12 semanas, es también contacto estrecho. ¿Qué quimioprofilaxis se le indica?",
        "opciones": [
          "A. Ciprofloxacina 500 mg vía oral en dosis única.",
          "B. Ceftriaxona 250 mg intramuscular en dosis única, que es el antibiótico de elección para la quimioprofilaxis en gestantes según el protocolo del INS.",
          "C. Rifampicina 600 mg cada 12 horas durante dos días.",
          "D. No se indica profilaxis a las gestantes."
        ]
      },
      {
        "pregunta": "4. ¿Cuál es el manejo obstétrico apropiado?",
        "opciones": [
          "A. Interrumpir el embarazo de inmediato en toda gestante con EMI.",
          "B. Estabilización materna como prioridad, monitoría fetal continua y control estricto de la fiebre y de la oxigenación. La vía y el momento del parto se deciden por indicación obstétrica y por la condición materna, no por la infección en sí; la maduración pulmonar fetal se considera si hay riesgo de parto pretérmino y la condición materna lo permite.",
          "C. Administrar tocolíticos de rutina.",
          "D. Evitar los líquidos endovenosos por el riesgo de edema pulmonar."
        ]
      },
      {
        "pregunta": "5. ¿Qué debe hacerse con el hijo de 4 años y con el jardín infantil?",
        "opciones": [
          "A. No hacer nada, porque su cuadro febril ya se resolvió.",
          "B. Informar el nexo epidemiológico, activar la investigación epidemiológica de campo dentro de las primeras 48 horas, censar y administrar quimioprofilaxis a los contactos estrechos del jardín y de la familia, y hacer seguimiento durante 10 días. La vacunación se define con la autoridad sanitaria según el serogrupo identificado.",
          "C. Tomar cultivo nasofaríngeo al niño y decidir según el resultado.",
          "D. Dar profilaxis solo al niño."
        ]
      }
    ]
  }
};

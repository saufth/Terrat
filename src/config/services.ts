import { type Category } from '@/types'

export const services: Category[] = [
  {
    title: 'Servicios inmobiliarios',
    description: 'Facilitamos la búsqueda y adquisición de propiedades en el mejor lugar.',
    slug: '/inmobiliaria',
    image: {
      src: '/images/service1.webp',
      alt: 'Patio de un condominio con edificios residenciales',
      width: 2480,
      height: 2480
    },
    items: [
      {
        title: 'Renta de propiedades',
        description: 'Simplificamos el proceso de encontrar la propiedad en alquiler ideal en tu ubicación preferida.',
        image: {
          src: '/images/service1-category1.webp',
          alt: 'Grúas torre en obra de construcción de edificos de apartamentos residenciales altos',
          width: 2480,
          height: 2480
        },
        items: [
          {
            title: 'Identificación y selección',
            description: 'Analizamos detenidamente tus preferencias y presupuesto para identificar propiedades que no solo cumplan, sino que superan tus expectativas, garantizando una selección personalizada y precisa.'
          },
          {
            title: 'Gestión de contratos',
            description: 'Preparamos, revisamos y gestionamos todos los documentos necesarios con un enfoque en la claridad, garantizando que arrendadores y arrendatarios comprendan y estén satisfechos con cada término y condición.'
          },
          {
            title: 'Administración de alquiler',
            description: 'Desde el mantenimiento regular hasta las reparaciones urgentes, nos aseguramos de que cada propiedad esté en condiciones óptimas, proporcionando tranquilidad a los propietarios y un hogar confortable y seguro para los inquilinos.'
          },
          {
            title: 'Cobro de renta',
            description: 'Utilizamos tecnología avanzada para facilitar pagos seguros y puntuales garantizando que el proceso sea conveniente para los arrendatarios, mientras aseguramos que los arrendadores reciban sus pagos de manera oportuna.'
          },
          {
            title: 'Asesoría legal',
            description: 'Nos aseguramos de que los derechos de ambos, arrendadores y arrendatarios, estén protegidos y se respeten en cada transacción y acuerdo.'
          },
          {
            title: 'Marketing',
            description: 'A través de diversos canales de comunicación, nos aseguramos de que tus propiedades alcancen a los arrendatarios potenciales adecuados, garantizando una ocupación rápida.'
          }
        ]
      },
      {
        title: 'Compra de propiedades',
        description: 'Simplificamos el proceso de encontrar la propiedad en alquiler ideal en tu ubicación preferida.',
        image: {
          src: '/images/service1-category2.webp',
          alt: 'Pareja recien casada mudanse a su nueva casa recien comprada',
          width: 2480,
          height: 2480
        },
        items: [
          {
            title: 'Búsqueda personalizada',
            description: 'Te ofrecemos un servicio de búsqueda personalizada, identificando propiedades que se alinean perfectamente a tus especificaciones, preferencias y presupuesto, garantizandote selecciones que encarnan tu visión de hogar o inversión ideal.'
          },
          {
            title: 'Asesoramiento',
            description: 'Te proporcionamos asesoramiento integral en cada etapa del proceso de compra. Desde la selección de propiedades hasta la negociación de precios y términos, aseguramos que estés informado, empoderado y satisfecho en cada paso.'
          },
          {
            title: 'Gestión de documentación',
            description: 'Nos encargamos de todo el papeleo, garantizando que cada documento sea preciso, transparente y procesado en tiempo, facilitándote una transacción sin problemas.'
          },
          {
            title: 'Inspecciones de propiedades',
            description: 'Nos aseguramos de que conozcas todos los aspectos, desde la estructura hasta los sistemas internos, garantizándote decisiones de compra informadas y seguras.'
          },
          {
            title: 'Negociación de precios',
            description: 'Navegamos por las negociaciones con habilidad y tacto, asegurándote términos favorables y precios justos en cada compra.'
          },
          {
            title: 'Servicios financieros',
            description: 'Te ofrecemos orientación, ayudándote a navegar por las opciones de financiamiento, préstamos y créditos para asegurar acuerdos financieros optimizados y sostenibles.'
          },
          {
            title: 'Asesoría legal',
            description: 'Tu tranquilidad legal es fundamental. Nuestros expertos legales te ofrecen asesoramiento y apoyo en cada etapa, garantizando que cada transacción cumpla con los estándares legales y éticos más elevados.'
          },
          {
            title: 'Cierre de la compra',
            description: 'Coordinamos y facilitamos el proceso de cierre, asegurándote que cada detalle sea manejado con precisión y eficiencia. Desde la revisión final hasta la entrega de llaves, procuramos una transición satisfactoria.'
          }
        ]
      },
      {
        title: 'Venta de propiedades',
        description: 'Descubre oportunidades únicas en el mercado inmobiliario.',
        image: {
          src: '/images/service1-category3.webp',
          alt: 'Sala de un apartamento recien alquilado con muebles modernos y decoración minimalista',
          width: 2480,
          height: 2480
        },
        items: [
          {
            title: 'Análisis de mercado',
            description: 'Te proporcionamos un panorama detallado del mercado actual, asegurando que tu propiedad se posicione de manera competitiva para una venta rápida y rentable.'
          },
          {
            title: 'Promoción estratégica',
            description: 'Desarrollamos campañas de marketing a medida, utilizando plataformas digitales y tradicionales para capturar la atención de compradores potenciales de manera efectiva.'
          },
          {
            title: 'Preparación de la propiedad',
            description: 'Desde renovaciones menores hasta estrategias de staging, preparamos tu propiedad para que destaque, generando un interés sin precedentes.'
          },
          {
            title: 'Gestión de visitas',
            description: 'Coordinamos visitas personalizadas, creando experiencias memorables para los posibles compradores, permitiéndoles visualizar el potencial único de tu propiedad.'
          },
          {
            title: 'Negociaciones efectivas',
            description: 'Nuestros agentes se dedican a asegurar ofertas que reflejen el verdadero valor de tu propiedad, optimizando tus retornos.'
          },
          {
            title: 'Trámites y documentación',
            description: 'Gestionamos todos los documentos y trámites necesarios, transformando un proceso complejo en una experiencia fluida y sin estrés.'
          },
          {
            title: 'Asesoría jurídica',
            description: 'Nuestro equipo legal te asiste en cada paso, garantizando que cada aspecto de la venta se realice conforme a la legalidad y en tu mejor interés.'
          },
          {
            title: 'Cierre de venta',
            description: 'Coordinamos cada detalle para asegurar una conclusión satisfactoria, marcando el comienzo de tu próximo capítulo con satisfacción y confianza.'
          }
        ]
      }
    ]
  },
  {
    title: 'Servicios de desarrollo inmobiliario',
    description: 'Diseñamos soluciones a medida para tus proyectos.',
    slug: '/desarrolladora',
    image: {
      src: '/images/service2.webp',
      alt: 'Grúas torre en obra de construcción de edificos de apartamentos residenciales altos',
      width: 2480,
      height: 2480
    },
    items: [
      {
        title: 'Desarrollo inmobiliario',
        image: {
          src: '/images/service2-category1.webp',
          alt: 'Grúa torre en obra de construcción de edificos de apartamentos residenciales altos',
          width: 2480,
          height: 2480
        },
        items: [
          {
            title: 'Planificación estratégica',
            description: 'Fusionamos tu visión con la ejecución. Nuestros planes se diseñan para maximizar el potencial de cada desarrollo, integrando análisis de mercado y tendencias emergentes para proyectos inigualables.'
          },
          {
            title: 'Diseño arquitectónico',
            description: 'Nuestro equipo de arquitectos crearán para ti diseños que no solo son estéticamente cautivadores, sino también funcionales y sostenibles, definiendo el estándar de excelencia arquitectónica.'
          },
          {
            title: 'Gestión de construcción',
            description: 'Coordinamos cada aspecto, desde la selección de materiales hasta la ejecución, garantizando obras que reflejen la confluencia de funcionalidad e innovación.'
          },
          {
            title: 'Permisos y regulaciones',
            description: 'Navegamos por el panorama regulatorio con agilidad, obteniendo los permisos necesarios para que cada desarrollo cumpla con los estándares reguladores y legales más estrictos.'
          },
          {
            title: 'Ventas y marketing',
            description: 'A través de estrategias de marketing personalizadas y ventas estratégicas, posicionamos tu propiedad en el mercado, captando la atención de compradores e inversores calificados.'
          },
          {
            title: 'Sostenibilidad energética',
            description: 'Integramos innovaciones ecológicas, ya que todos nuestros desarrollos son modernos y sostenibles, contribuyendo a un futuro más verde y eficiente energéticamente.'
          },
          {
            title: 'Gestión de proyectos',
            description: 'Gestionamos tu proyecto con una supervisión detallada y comunicación transparente, asegurando que tus objetivos, plazos y expectativas de calidad se cumplan consistentemente.'
          },
          {
            title: 'Consultoría de inversiones',
            description: 'Te ofrecemos asesoramiento experto como inversor, proporcionándote insights críticos y oportunidades de inversión en desarrollos que te ofrezcan retornos atractivos y crecimiento a largo plazo.'
          }
        ]
      }
    ]
  },
  {
    title: 'Renta de materiales para la construcción',
    description: 'Facilitamos tu proyecto de construcción ofreciendo una amplia gama de materiales en alquiler, para que tengas todo lo que necesitas a tu disposición.',
    slug: '/construccion',
    image: {
      src: '/images/service3.webp',
      alt: 'Excavadora pesada en obra de construcción',
      width: 2480,
      height: 2480
    },
    items: [
      {
        title: 'Venta de materiales para la construcción',
        description: 'Suministramos materiales de construcción de calidad para que tu proyecto se construya con solidez y durabilidad.',
        image: {
          src: '/images/service3-category1.webp',
          alt: 'Hombre comprando materiales de construcción en una tienda de suministros de construcción',
          width: 2480,
          height: 2480
        },
        items: [
          {
            title: 'Maquinaria especializada',
            description: 'Te ofrecemos opciones de compra para equipos como bombas de concreto, retroexcavadoras, bulldozers, carretillas elevadoras y máquinas de pavimentación para optimizar tu proyecto, ofreciendo durabilidad y rendimiento excepcional.'
          },
          {
            title: 'Herramientas de construcción',
            description: 'Nuestro catálogo incluye herramientas de alta calidad, desde martillos y espátulas hasta niveladores láser y detectores de materiales para ofrecerte la precisión, la eficiencia y la durabilidad que necesitas en cada tarea.'
          },
          {
            title: 'Venta de equipos de seguridad',
            description: 'Te ofrecemos lo mejor en equipos de protección, como guantes de trabajo, máscaras antipolvo, protectores auditivos y ropa de seguridad. Cada elemento está diseñado para garantizar un entorno de trabajo protegido y seguro.'
          },
          {
            title: 'Venta de materiales de construcción',
            description: 'Te proporcionamos una amplia gama de materiales, incluyendo cemento, ladrillos, acero, madera y vidrio. Nos aseguramos de que cada material que ofrecemos sea de la máxima calidad, para garantizar la durabilidad de tus construcciones.'
          }
        ]
      },
      {
        title: 'Renta de materiales para la industria',
        description: 'Optimiza tus operaciones industriales a través de la renta de materiales específicos justamente para lo que necesitas.',
        image: {
          src: '/images/service3-category2.webp',
          alt: 'Maquinaria industrial recibiendo mantenimiento en una fábrica',
          width: 2480,
          height: 2480
        },
        items: [
          {
            title: 'Maquinaria industrial',
            description: 'Te ofrecemos opciones de maquinaria industrial altamente especializada, como rectificadoras, taladros radiales, máquinas de electroerosión, prensas mecánicas, y rodillos compactadores.'
          },
          {
            title: 'Herramientas eléctricas',
            description: 'A tu disposición tienes una gama de herramientas eléctricas de primera calidad. Entre ellas están: esmeriladoras, pulidoras, destornilladores eléctricos, pistolas de remaches y martillos eléctricos.'
          },
          {
            title: 'Seguridad industrial',
            description: 'Ampliamos nuestro inventario para incluir detectores de humo avanzados, sistemas de supresión de incendios, alarmas de proximidad, sistemas anticaídas, y equipos de ventilación, garantizando un ambiente de trabajo seguro y conforme a las normativas.'
          },
          {
            title: 'Sistemas de transporte',
            description: 'Te brindamos soluciones en sistemas de transporte industrial como plataformas elevadoras, vehículos industriales eléctricos, sistemas de carros elevadores, manipuladores telescópicos y grúas móviles.'
          }
        ]
      },
      {
        title: 'Venta de materiales para la industria',
        description: 'Ofrecemos materiales industriales de primera calidad para impulsar la eficiencia y la excelencia en tu negocio.',
        image: {
          src: '/images/service3-category3.webp',
          alt: 'Maquina industrial nueva dentro de una fábrica',
          width: 2480,
          height: 2480
        },
        items: [
          {
            title: 'Maquinaria especializada',
            description: 'En nuestro catálogo encontrarás máquinas de corte por láser, prensas de estampado, centros de mecanizado, máquinas de fundición y robots de manipulación.'
          },
          {
            title: 'Equipos de automatización',
            description: 'Nos complace ofrecerte sistemas de paletización, módulos de control numérico, servomecanismos, actuadores lineales y robots colaborativos.'
          },
          {
            title: 'Herramientas eléctricas',
            description: 'Ponemos a tu alcance una variedad de herramientas eléctricas y manuales, incluyendo taladros de banco, llaves de impacto, cortadoras de metales, prensas de banco y herramientas de marcado.'
          },
          {
            title: 'Equipos de seguridad',
            description: 'Te ofrecemos una gama completa de equipos de seguridad, como mascarillas respiratorias, sistemas de bloqueo/etiquetado, equipos de protección contra caídas, monitores de calidad del aire y sistemas de alarma visual y sonora.'
          }
        ]
      }
    ]
  }
]

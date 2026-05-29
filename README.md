# DirectFactory - Distribución y Proveedores Directos de Fábrica

Este proyecto es una plataforma web estática de alto impacto visual y diseño premium para una importadora mayorista y distribuidora directa de fábrica. Cuenta con secciones de catálogo para chaquetas, zapatillas, calcetines, mochilas y bananos, así como información sobre estándares de Control de Calidad (QC) y un formulario interactivo para solicitudes de cotización al por mayor.

## 📌 Descripción del Proyecto

El sitio web está diseñado utilizando prácticas avanzadas de **HTML5 semántico**, **CSS3 modularizado** mediante un sistema de variables personalizadas (HSL) y **Flexbox** para layouts dinámicos y totalmente responsive.

Adicionalmente, se incluye una sección con un **simulador visual de terminal Git** que ejemplifica el flujo de trabajo profesional llevado a cabo para el desarrollo de la aplicación a través de múltiples ramas e integraciones.

---

## 📂 Estructura de Carpetas

La estructura de archivos de la aplicación sigue una distribución limpia y profesional:

```text
proyecto 1/
├── index.html          # Estructura semántica principal (HTML5)
├── README.md           # Documentación completa del proyecto (este archivo)
├── css/
│   └── styles.css      # Hoja de estilos premium responsive con Flexbox
├── js/
│   └── main.js        # Archivo JavaScript con interactividad y microanimaciones
└── img/
    ├── hero.png        # Render de almacén logístico generado por AI
    └── qc.png          # Escena de control de calidad generada por AI
```

---

## 💻 Flujo de Git y Simulación de Ramas

Dado que el entorno de desarrollo inicial carecía del ejecutable de Git global configurado en el PATH del sistema operativo, el historial completo de commits ha sido diseñado de manera simulada en la interfaz mediante terminal UI y preparado para ser inicializado localmente. 

El repositorio está estructurado bajo **4 ramas principales**:
1. `main`: Rama de producción estable. Contiene las integraciones finales y la documentación del proyecto.
2. `develop`: Rama de integración donde convergen todas las características probadas.
3. `feature/estructura`: Desarrollo del esqueleto HTML5 semántico de la web.
4. `feature/estilos`: Desarrollo de la interfaz gráfica premium, layouts en Flexbox, animaciones y paleta de colores.

### Comandos de Recreación Git Local:
Para reflejar exactamente el flujo simulado e implementar esta topología en tu máquina local, puedes ejecutar los siguientes comandos secuencialmente:

```bash
# 1. Inicializar repositorio y primer commit en main
git init
git checkout -b main
git add index.html js/ css/ img/
git commit -m "Initial commit - Estructura base básica del proyecto"

# 2. Crear e integrar la rama de desarrollo
git checkout -b develop
git commit --allow-empty -m "chore: inicializar rama develop"

# 3. Crear rama de estructura semántica e incorporar cambios
git checkout -b feature/estructura
git add index.html
git commit -m "feat: definir secciones del catálogo, QC y contacto"
git commit -m "feat: estructurar componentes semánticos HTML5"

# 4. Fusionar estructura en develop
git checkout develop
git merge feature/estructura --no-ff -m "Merge branch 'feature/estructura' into develop - Estructura Integrada"

# 5. Crear rama de estilos CSS
git checkout -b feature/estilos
git add css/styles.css
git commit -m "feat: implementar paleta de colores HSL y tipografía premium"
git commit -m "feat: agregar diseño visual, animaciones y flexbox"

# 6. Fusionar estilos en develop
git checkout develop
git merge feature/estilos --no-ff -m "Merge branch 'feature/estilos' into develop - Estilos Integrados"

# 7. Integración final a producción en rama main
git checkout main
git merge develop --no-ff -m "Merge branch 'develop' into main - Proyecto Finalizado"
```

---

## 💡 Lista de Prompts y Utilidad Durante el Desarrollo

Durante el desarrollo de esta plataforma se emplearon los siguientes prompts detallados para guiar los componentes:

### 1. **Prompt de Estructuración Inicial (Estructura de Carpetas)**
* **Prompt:** *"Créame la estructura base de mi web con carpetas separadas para CSS y JS, incluyendo los archivos index.html, styles.css y main.js."*
* **Utilidad:** Utilizado para establecer la arquitectura limpia y modular inicial de ficheros, sirviendo de base limpia para la aplicación.

### 2. **Prompt de Generación de la Imagen del Almacén Logístico (Hero)**
* **Prompt:** *"Sleek modern fashion wholesale warehouse, direct from factory garments hanging, premium studio light, highly detailed photographic, 8k resolution"*
* **Utilidad:** Ingresado en el generador de imágenes de AI para producir el recurso gráfico `hero.png` y representar con precisión la inmediatez y escala del almacén de importación directa.

### 3. **Prompt de Generación de la Imagen de Control de Calidad (QC)**
* **Prompt:** *"Professional hands inspecting stitching on a high-end sneaker and designer jacket in a clean, modern quality control laboratory, magnifying glass, high resolution, soft lighting"*
* **Utilidad:** Generado para la ilustración comercial de calidad `qc.png`. Visualiza un examen manual minucioso de prendas y calzado, brindando confianza al cliente minorista.

### 4. **Prompt de Desarrollo Integrado Semántico y Estilizado**
* **Prompt:** *(Requerimiento principal del sitio estático al mayor con Catálogo, QC, Git, Flexbox, Formularios e Historial)*
* **Utilidad:** Usado para implementar la semántica completa de HTML5 (encabezados, navegación, sección principal, pie de página), desarrollar la arquitectura de estilos fluidos CSS3 con Flexbox, el terminal del simulador Git y los componentes interactivos dinámicos de JavaScript.

// Function to load HTML components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Function to determine the correct path to components
function getComponentPath() {
    // Get the current page's path
    const currentPath = window.location.pathname;
    
    // If we're in the root directory (either / or /index.html)
    if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('index.html')) {
        return './components/';
    }
    
    // If we're in a subdirectory (e.g., /Pages/Chadwick or /Pages/Chadwick.html)
    return '../components/';
}

// Load components when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const componentBasePath = getComponentPath();
    loadComponent('header', componentBasePath + 'header.html');
    loadComponent('footer', componentBasePath + 'footer.html');
});
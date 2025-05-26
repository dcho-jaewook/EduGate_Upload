async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Load components when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', './components/header.html');
    loadComponent('footer', './components/footer.html');
});
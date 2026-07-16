// Dynamic Anchor Node navigation tracking loop
const UISections = document.querySelectorAll('.section');
const NavigationLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let focusId = '';
    
    UISections.forEach(block => {
        const topPosition = block.offsetTop;
        const totalHeight = block.clientHeight;
        
        if (pageYOffset >= (topPosition - totalHeight / 3)) {
            focusId = block.getAttribute('id');
        }
    });

    NavigationLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === focusId) {
            link.classList.add('active');
        }
    });
});

// Real-Time System Clock Indicator (UTC formatting)
function refreshClock() {
    const timeNode = document.getElementById('system-time');
    if (timeNode) {
        const currentData = new Date();
        const formattedString = currentData.toISOString().replace('T', ' // ').substring(0, 21);
        timeNode.innerHTML = `SYS // ${formattedString} UTC`;
    }
}
setInterval(refreshClock, 1000);
refreshClock();
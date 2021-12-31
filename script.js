let display_letter = () => {
    let root = document.documentElement;
    let base = document.getElementById('base')

    root.style.setProperty('--page-height', '200px' );
    document.getElementById('hny').style.display = "block";
    base.classList.remove('increment')
}
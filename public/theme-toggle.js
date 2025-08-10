const themeToggle = document.getElementById('theme-toggle');

themeToggle?.addEventListener('click', () => {
	const html = document.documentElement;
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		localStorage.setItem('theme', 'light');
	} else {
		html.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	}
});

if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
}
// 🌙 Dark Mode Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    toggle.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.textContent = '☀️';
  }
});

// 📊 Sample Plotly Chart
const trace1 = {
  x: ['Q1', 'Q2', 'Q3', 'Q4'],
  y: [120, 200, 150, 300],
  type: 'bar',
  marker: { color: '#0b3954' }
};

const layout = {
  title: 'Quarterly Sales (Sample Data)',
  xaxis: { title: 'Quarter' },
  yaxis: { title: 'Sales ($K)' },
  paper_bgcolor: 'transparent',
  plot_bgcolor: 'transparent',
  font: { color: '#333' }
};

Plotly.newPlot('plot', [trace1], layout, {responsive: true});

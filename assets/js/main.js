// Render dashboards
window.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  Object.entries(weeklyData).forEach(([key, { title, rows }]) => {
    const section = document.createElement("section");
    section.className = `day-section ${key}`;
    section.id = key;

    section.innerHTML = `
      <h2>${title}</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Team Member</th>
              <th>Open Campaigns On</th>
              <th>On The Platforms</th>
              <th>Focus On These Countries</th>
              <th>Some Extra Tasks</th>
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (row) =>
                  `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;

    main.appendChild(section);
  });
});


// Navigation

const isEditMode = window.location.search.includes("edit=true");

document.querySelectorAll('.editable').forEach(cell => {
    if (isEditMode) {
        cell.setAttribute('contenteditable', 'true');
        cell.style.backgroundColor = '#fffbe6';
    } else {
        cell.removeAttribute('contenteditable');
        cell.style.backgroundColor = '#ffffff';
    }
});

// Botão "Voltar ao Topo"
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
} else {
    backToTopBtn.style.display = "none";
}
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

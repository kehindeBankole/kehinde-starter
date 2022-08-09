interface Results {
  id: string;
  row: number;
  age: number;
  gender: "male" | "female";
}

let currentPage: number = 1;
let isFirstPage: boolean = true;
let prevBtn = document.getElementById("prev-btn") as HTMLButtonElement;
const tbody = document.getElementsByClassName("table-body")[0];

async function makeCall<T = any>(page: number): Promise<T> {
  try {
    const req = await fetch(
      `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=${page}`
    );
    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
}

async function getData(page: number) {
  const results = await makeCall<{
    results: {
      [key: string]: Results[];
    }[];
    info: { page: number | string };
  }>(page);

  let data = results.results[0][`${page}`];
  if (results.info.page === "1") {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  const tableData = data
    .map((item) => {
      return `
    <tr data-entryid=${item.id}>
    <td>${item.row}</td>
    <td>${item.gender}</td>
    <td>${item.age}</td>
    </tr>
    `;
    })
    .join("");

  tbody.innerHTML = tableData;
}

function next() {
  currentPage++;
  getData(currentPage);
}
function prev() {
  currentPage--;
  getData(currentPage);
}
const startApp = async () => {
  getData(currentPage);
};
document.getElementById("next-btn")?.addEventListener("click", next);
prevBtn?.addEventListener("click", prev);
document.addEventListener("DOMContentLoaded", startApp);

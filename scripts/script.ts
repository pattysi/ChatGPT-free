// script.ts
const modal: HTMLElement | null = document.getElementById("myModal");
const span: HTMLElement | null = document.getElementsByClassName("关闭")[0] as HTMLElement;

function openModal(): void {
  if (modal) {
    modal.style.display = "block";
  }
}

if (span) {
  span.onclick = function(): void {
    if (modal) {
      modal.style.display = "none";
    }
  }
}

window.onclick = function(event: MouseEvent): void {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

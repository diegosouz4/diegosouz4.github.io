import InitAccordion from"./initAccordion.js";export default function initTabs(){var t=document.querySelectorAll("[data-tab]");(document.querySelectorAll("[data-content]")||t)&&(openTab(t[0]),t.forEach((function(t){t.addEventListener("click",handleClick)})))}function handleClick(t){resetTabs(),this.classList.contains("active")||openTab(this)}function openTab(t){t.classList.add("active"),document.querySelector('[data-content="'.concat(t.dataset.tab,'"]')).classList.add("active"),InitAccordion()}function resetTabs(){var t=document.querySelectorAll("[data-tab]"),e=document.querySelectorAll("[data-content]");(e||t)&&(t.forEach((function(t){return t.classList.remove("active")})),e.forEach((function(t){return t.classList.remove("active")})))}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9pbml0VGFicy5qcyJdLCJuYW1lcyI6WyJJbml0QWNjb3JkaW9uIiwiaW5pdFRhYnMiLCJ0YWJzQnRucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9wZW5UYWIiLCJmb3JFYWNoIiwidGFiIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJyZXNldFRhYnMiLCJ0aGlzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJlbCIsImFkZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJkYXRhc2V0IiwidGFiQ29udGVudHMiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJPQUFPQSxrQkFBbUIsb0NBRVgsU0FBU0MsV0FDdEIsSUFBTUMsRUFBV0MsU0FBU0MsaUJBQWlCLGVBQ3ZCRCxTQUFTQyxpQkFBaUIsbUJBQ3pCRixLQUVyQkcsUUFBUUgsRUFBUyxJQUVqQkEsRUFBU0ksU0FBUSxTQUFDQyxHQUNoQkEsRUFBSUMsaUJBQWlCLFFBQVNDLGlCQUlsQyxTQUFTQSxZQUFZQyxHQUNuQkMsWUFFSUMsS0FBS0MsVUFBVUMsU0FBUyxXQUM1QlQsUUFBUU8sTUFJVixTQUFTUCxRQUFRVSxHQUNmQSxFQUFHRixVQUFVRyxJQUFJLFVBQ0ViLFNBQVNjLGNBQVQsa0JBQUFDLE9BQ0NILEVBQUdJLFFBQVFaLElBRFosT0FHUk0sVUFBVUcsSUFBSSxVQUN6QmhCLGdCQUlGLFNBQVNXLFlBQ1AsSUFBTVQsRUFBV0MsU0FBU0MsaUJBQWlCLGNBQ3JDZ0IsRUFBY2pCLFNBQVNDLGlCQUFpQixtQkFDekNnQixHQUFnQmxCLEtBRXJCQSxFQUFTSSxTQUFRLFNBQUNTLEdBQUQsT0FBUUEsRUFBR0YsVUFBVVEsT0FBTyxhQUM3Q0QsRUFBWWQsU0FBUSxTQUFDUyxHQUFELE9BQVFBLEVBQUdGLFVBQVVRLE9BQU8iLCJmaWxlIjoibW9kdWxlL2luaXRUYWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEluaXRBY2NvcmRpb24gZnJvbSBcIi4vaW5pdEFjY29yZGlvbi5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFRhYnMoKSB7XHJcbiAgY29uc3QgdGFic0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGFiXVwiKTtcclxuICBjb25zdCB0YWJDb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jb250ZW50XVwiKTtcclxuICBpZiAoIXRhYkNvbnRlbnRzICYmICF0YWJzQnRucykgcmV0dXJuO1xyXG5cclxuICBvcGVuVGFiKHRhYnNCdG5zWzBdKTtcclxuXHJcbiAgdGFic0J0bnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICByZXNldFRhYnMoKTtcclxuXHJcbiAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XHJcbiAgb3BlblRhYih0aGlzKTtcclxufVxyXG5cclxuLy9GdW7Dp8OjbyBwYXJhIGFicmlyIGEgdGFiIHNlbGVjaW9uYWRhLlxyXG5mdW5jdGlvbiBvcGVuVGFiKGVsKSB7XHJcbiAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIGBbZGF0YS1jb250ZW50PVwiJHtlbC5kYXRhc2V0LnRhYn1cIl1gXHJcbiAgKTtcclxuICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgSW5pdEFjY29yZGlvbigpO1xyXG59XHJcblxyXG4vL0Z1bsOnw6NvIHBhcmEgZmVjaGFyIGFzIHRhYnMuXHJcbmZ1bmN0aW9uIHJlc2V0VGFicygpIHtcclxuICBjb25zdCB0YWJzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YWJdXCIpO1xyXG4gIGNvbnN0IHRhYkNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNvbnRlbnRdXCIpO1xyXG4gIGlmICghdGFiQ29udGVudHMgJiYgIXRhYnNCdG5zKSByZXR1cm47XHJcblxyXG4gIHRhYnNCdG5zLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuICB0YWJDb250ZW50cy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcbn1cclxuIl19
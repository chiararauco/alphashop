import { Component, ElementRef } from '@angular/core';
// import { StopDialogComponent } from '../stop-dialog/stop-dialog.component';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css']
})
export class GamesTableComponent {

  constructor(private elRef: ElementRef,
  ) { }

  ngOnInit(): void {
    const dialog = this.elRef.nativeElement.querySelector("dialog");
    const showButton = this.elRef.nativeElement.querySelector("dialog + button");
    const closeButton = this.elRef.nativeElement.querySelector("dialog button");

    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
      dialog.showModal();
    });

    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
      dialog.close();
    });
    // this.addIdsToRows();
  }

  ngAfterViewInit(): void {
    this.setupPagination();
  }
  closeDialog(): void {
    const dialog = document.querySelector('dialog');
    if (dialog) {
      dialog.close();
    }
  }

  openDialog(): void {
    const dialog = document.querySelector('dialog');
    if (dialog) {
      dialog.showModal();
    }
  }

  setupPagination(): void {
    const table = this.elRef.nativeElement.querySelector('#table-id');
    const maxRowsSelect = this.elRef.nativeElement.querySelector('#maxRows');
    const pagination = table.parentNode.querySelector('.pagination');
    let lastPage = 1;

    maxRowsSelect.addEventListener('change', () => {
      lastPage = 1;
      const maxRows = parseInt(maxRowsSelect.value);
      const totalRows = table.querySelectorAll('tbody tr').length;
      const trs: HTMLTableRowElement[] = Array.from(table.querySelectorAll('tr'));
      let trIndex = 0;

      pagination.style.display = maxRows === 5000 ? 'none' : 'flex';
      pagination.querySelectorAll('li').forEach((li: { remove: () => void; }, index: number) => {
        if (index !== 0 && index !== pagination.querySelectorAll('li').length - 1) {
          li.remove();
        }
      });

      trs.forEach((tr, index) => {
        trIndex++;
        tr.style.display = trIndex > maxRows ? 'none' : 'table-row';
      });

      if (totalRows > maxRows) {
        const pagenum = Math.ceil(totalRows / maxRows);
        for (let i = 1; i <= pagenum; i++) {
          const li = document.createElement('li');
          li.dataset['page'] = i.toString();
          // li.innerHTML = `<span>${i}</span>`;
          pagination.insertBefore(li, pagination.querySelector('#prev'));
        }
      }

      // pagination.querySelector('[data-page="1"]').classList.add('active');

      pagination.querySelectorAll('li').forEach((li: { addEventListener: (arg0: string, arg1: (evt: any) => void) => void; getAttribute: (arg0: string) => any; }) => {
        li.addEventListener('click', (evt: { stopImmediatePropagation: () => void; preventDefault: () => void; }) => {
          evt.stopImmediatePropagation();
          evt.preventDefault();
          let pageNum = li.getAttribute('data-page');

          if (pageNum === 'prev') {
            if (lastPage === 1) return;
            pageNum = (--lastPage).toString();
          }
          if (pageNum === 'next') {
            if (lastPage === pagination.querySelectorAll('li').length - 2) return;
            pageNum = (++lastPage).toString();
          }

          lastPage = parseInt(pageNum);
          pagination.querySelectorAll('li').forEach((li: { classList: { remove: (arg0: string) => any; }; }) => li.classList.remove('active'));
          pagination.querySelector(`[data-page="${lastPage}"]`).classList.add('active');

          trs.forEach((tr, index) => {
            tr.style.display = (index > maxRows * lastPage || index <= maxRows * lastPage - maxRows) ? 'none' : 'table-row';
          });
        });
      });

      this.limitPagination(pagination, trs);
    });

    maxRowsSelect.value = '5';
    maxRowsSelect.dispatchEvent(new Event('change'));
  }

  limitPagination(pagination: { querySelectorAll: (arg0: string) => any; querySelector: (arg0: string) => { (): any; new(): any; getAttribute: { (arg0: string): string; new(): any; }; style: { (): any; new(): any; display: string; }; }; }, trs: HTMLTableRowElement[]): void {
    const paginationLis = pagination.querySelectorAll('li');
    if (paginationLis.length > 7) {
      const activePage = parseInt(pagination.querySelector('.active').getAttribute('data-page'));
      paginationLis.forEach((li: { style: { display: string; }; }, index: number) => {
        if ((index > 5 && index !== paginationLis.length - 1) || (index < activePage - 2 || index > activePage + 2)) {
          li.style.display = 'none';
        } else {
          li.style.display = 'list-item';
        }
      });
      pagination.querySelector('[data-page="next"]').style.display = 'list-item';
    }
  }

  //filter function
  filterTable(): void {
    const input = this.elRef.nativeElement.querySelector("#myInput");
    const filter = input.value.toUpperCase();
    const table = this.elRef.nativeElement.querySelector("#myTable");
    const trs = table.querySelectorAll("tr");

    trs.forEach((tr: { querySelectorAll: (arg0: string) => any[]; style: { display: string; }; }) => {
      const tds = tr.querySelectorAll("td")[0];
      if (tds) {
        const txtValue = tds.textContent || tds.innerText;
        tr.style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
      }
    });
  }

  // addIdsToRows(): void {
  //   const table = this.elRef.nativeElement.querySelector('#table-id');
  //   const th = document.createElement('th');
  //   th.textContent = 'ID';
  //   table.querySelector('tr').insertBefore(th, table.querySelector('tr').firstChild);

  //   let id = 0;
  //   table.querySelectorAll('tr').forEach((tr: { insertBefore: (arg0: HTMLTableCellElement, arg1: any) => void; firstChild: any; }, index: number) => {
  //     if (index !== 0) {
  //       id++;
  //       const td = document.createElement('td');
  //       td.textContent = id.toString();
  //       tr.insertBefore(td, tr.firstChild);
  //     }
  //   });
  // }
}

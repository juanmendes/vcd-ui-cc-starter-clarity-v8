import { Component } from '@angular/core';
import { DataExportRequestEvent, ExportColumn } from '@vcd/ui-components';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
exportColumns: ExportColumn[] = [
        { fieldName: 'name', displayName: 'Name' },
        { fieldName: 'desc', displayName: 'Description' },
    ];

    dataExporterOpen = false;

    onExportRequest(request: DataExportRequestEvent): void {
        let currentProgress = 0;

        const updateProgress = () => {
            currentProgress += 0.01;
            if (currentProgress < 1) {
                request.updateProgress(currentProgress);
                setTimeout(updateProgress, 50);
            } else {
                request.exportData([
                    { name: 'Jack', desc: 'Tis what tis' },
                    { name: 'Jill', desc: 'Still tis what tis' },
                ]);
            }
        };
        updateProgress();
    }
}

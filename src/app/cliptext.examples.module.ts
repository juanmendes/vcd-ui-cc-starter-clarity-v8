/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CliptextDynamicInlineExampleComponent } from './cliptext-dynamic-inline.example.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { CliptextComponent,  CliptextModule } from '@vcd/ui-components';


@NgModule({
    declarations: [CliptextDynamicInlineExampleComponent],
    imports: [CommonModule, ClarityModule, ReactiveFormsModule, CliptextModule],
    exports: [CliptextDynamicInlineExampleComponent],
    entryComponents: [CliptextDynamicInlineExampleComponent],
})
export class CliptexExamplesModule {}

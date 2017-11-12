import { Injector, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export declare class BaseAppComponent implements OnInit, OnDestroy {
    title: string;
    translateService: TranslateService;
    constructor(injector: Injector);
    ngOnDestroy(): void;
    ngOnInit(): void;
    init(): void;
}

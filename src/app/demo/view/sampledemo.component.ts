import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/carservice';
import { CountryService } from '../service/countryservice';
import { NodeService } from '../service/nodeservice';
import { Car } from '../domain/car';
import { SelectItem, MenuItem, TreeNode } from 'primeng/api';

@Component({
    templateUrl: './sampledemo.component.html',
    styles: [`
        .filter-container {
            text-align: center;
        }

        .car-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2em;
            border-bottom: 1px solid #d9dad9;
        }

        .car-details > div {
            display: flex;
            align-items: center;
        }

        .car-details > div img {
            margin-right: 14px;
        }

        .car-detail {
            padding: 0 1em 1em 1em;
            border-bottom: 1px solid #d9dad9;
            margin: 1em;
        }

        .ui-panel-content {
            padding: 1em;
        }
        
        @media (max-width: 1024px) {
            .car-details img {
                width: 75px;
            }

            .filter-container {
                text-align: left;
            }
        }
    `]
})
export class SampleDemoComponent implements OnInit {

    country: any;

    filteredCountries: any[];

    cities1: SelectItem[];

    cities2: SelectItem[];

    selectedCity1: any;

    selectedCity2: any;

    radioValue: string;

    checkboxValues: string[] = [];

    splitButtonItems: MenuItem[];

    carOptions: SelectItem[];

    selectedMultiSelectCars: string[] = [];

    types: SelectItem[];

    dialogVisible: boolean;

    cars: Car[];

    cols: any[];

    carsLarge: Car[];

    selectedCar3: Car;

    filesTree: TreeNode[];

    menuItems: MenuItem[];

    panelMenuItems: MenuItem[];

    sourceCars: Car[];

    targetCars: Car[];

    orderListCars: Car[];

    carouselCars: Car[];

    maskValue: string;

    toggleButtonChecked: boolean;

    selectedType: string;

    sortKey: string;

    sortField: string;

    sortOrder: number;

    sortOptions: SelectItem[];

    constructor(private carService: CarService, private countryService: CountryService, private nodeService: NodeService) {}

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.carService.getCarsLarge().then(cars => this.carsLarge = cars);
        this.nodeService.getFiles().then(files => this.filesTree = files);
        this.carService.getCarsSmall().then(cars => this.sourceCars = cars);
        this.targetCars = [];
        this.carService.getCarsSmall().then(cars => this.orderListCars = cars);

        this.cities1 = [];
        this.cities1.push({ label: 'Select City', value: null });
        this.cities1.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities1.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities1.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities1.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities1.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });

        this.cities2 = this.cities1.slice(1, 6);

        this.splitButtonItems = [
            { label: 'Update', icon: 'pi pi-fw pi-refresh' },
            { label: 'Delete', icon: 'pi pi-fw pi-times' },
            { label: 'Home', icon: 'pi pi-fw pi-home', url: 'http://www.primefaces.org/primeng' }
        ];

        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'Volkswagen', value: 'Volkswagen' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });

        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });

        this.menuItems = [
            {
                label: 'Options',
                items: [{label: 'New', icon: 'pi pi-fw pi-plus'},
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'}]
            },
            {
                label: 'Account',
                items: [{label: 'Options', icon: 'pi pi-fw pi-cog'},
                    {label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
            }
        ];

        this.panelMenuItems = [
            {
                label: 'Documents',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            },

                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    },

                ]
            },
            {
                label: 'Accounts',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',

                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',

                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Calendar',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            }
        ];

        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'Volkswagen', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];

        this.sortOptions = [
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'},
            {label: 'Brand', value: 'brand'}
        ];
    }

    filterCountry(event) {
        const query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountries = this.searchCountry(query, countries);
        });
    }

    searchCountry(query, countries: any[]): any[] {
        // in a real application, make a request to a remote url with the query and return filtered results,
        // for demo we filter at client side
        const filtered: any[] = [];
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
}

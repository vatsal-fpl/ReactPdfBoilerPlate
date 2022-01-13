export const BasicSectionList = [
    'Contact Details', 
    'Objective', 
    'Address', 
    'Work Experience', 
    'Education', 
    'Projects',
    'Language',
    'Hobby',
    'Certifications',  
];

export const TemplateStructure = {
    display : "Portrait",
    pages: [
        // Page 1
        {
            title : 'Page 1',
            rows: [
                {
                    minWidth: '17.2cm',
                    rowName: 'row-1',
                    columns: [
                        // Col 1
                        {
                            width: '100%',
                            sections:
                            [
                                {
                                    sectionName: 'personal-details',
                                    padding: '0.5cm'
                                },
                                
                            ]
                        },
                    ],
                }, //End of row 1
                {
                    minWidth: '17.2cm',
                    rowName: 'row-2',
                    columns: [
                        // Col 1
                        {
                            width: '100%',
                            sections:
                            [
                                {
                                    sectionName: 'objective'
                                },
                                
                            ]
                        },
                    ],
                }, //End of row 2
                {
                    rowName: 'row-4',
                    minHeight: '20.7cm',
                    columns: [
                        // Col 1
                        {
                            width: '100%',
                            sections:
                            [
                                {
                                    sectionName: 'skills'
                                },
                                
                            ]
                        },
                        
                    ]
                  }, //End of row 3
                  {
                    rowName: 'row-3',
                    minHeight: '20.7cm',
                    columns: [
                        // Col 1
                        {
                            width: '100%',
                            sections:
                            [
                                {
                                    sectionName: 'education'
                                },
                                
                            ]
                        },
                        
                    ]
                  }, //End of row 4
                {
                    rowName: 'row-4',
                    minHeight: '20.7cm',
                    columns: [
                        // Col 1
                        {
                            width: '100%',
                            sections:
                            [
                                {
                                    sectionName: 'project'
                                },
                                
                            ]
                        },
                        
                    ]
                }, //End of row 5
                {
                    rowName: 'row-5',
                    minHeight: '20.7cm',
                    columns: [
                        // Col 1
                        {
                            width: '100%',
                            sections:
                            [
                                {
                                    sectionName: 'work-experience',
                                },
                                
                            ]
                        },
                        
                    ]
                }, //End of row 6
                {
                    minWidth: '17.2cm',
                    rowName: 'row-6',
                    columns: [
                        // Col 1
                        {
                            width: '100%',
                            sections:
                            [
                                {
                                    sectionName: 'certification'
                                },
                                
                            ]
                        },
                    ],
                }, //End of row 7
                {
                    minWidth: '17.2cm',
                    rowName: 'row-6',
                    columns: [
                        // Col 1
                        {
                            width: '100%',
                            sections:
                            [
                                {
                                    sectionName: 'language'
                                },
                                
                            ]
                        },
                    ],
                }, //End of row 8
                {
                    minWidth: '17.2cm',
                    rowName: 'row-6',
                    columns: [
                        // Col 1
                        {
                            width: '100%',
                            sections:
                            [
                                {
                                    sectionName: 'hobby'
                                },
                                
                            ]
                        },
                    ],
                }, //End of row 9
            ], // End of rows
        },
    ] //End of Pages array
}
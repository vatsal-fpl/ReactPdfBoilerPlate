export const BasicSectionList = [
    'Contact Details', 
    'Objective', 
    'Work experience', 
    'Education', 
    'Projects',
    'Skill',
    'Language',
    'Hobby',
    'Certification',  
];

export const TemplateStructure = {
    display : "Portrait",
    pages: [
        // Page 1
        {
            id: "1",
            title : 'Page 1',
            rows: [
                {
                    id: "1",
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
                    id: "2",    
                    minWidth: '17.2cm',
                    rowName: 'row-2',
                    columns: [
                        // Col 1
                        {
                            id: "1",
                            width: '50%',
                            sections:
                            [
                                {
                                    id: "1",
                                    sectionName: 'objective',
                                },
                                {
                                    id: "2",
                                    sectionName: 'education',
                                },
                                {
                                    id: "3",
                                    sectionName: 'hobby',
                                },
                                {
                                    id: "4",
                                    sectionName: 'certification',
                                },    
                            ],
                        },
                 //End of col 1
                {
                    id: "2",
                    width: "50%",
                    sections: [
                        {
                            id: "1",
                            sectionName: 'skill',
                        },
                        {
                            id: "2",
                            sectionName: 'project',
                        },
                        {
                            id: "3",
                            sectionName: 'language',
                        },
                        {
                            id: "4",
                            sectionName: 'work-experience',
                        },
                                   
                    ],
                  },   
                ],
            }, 
        ], 
    },
], //End of Pages array
};
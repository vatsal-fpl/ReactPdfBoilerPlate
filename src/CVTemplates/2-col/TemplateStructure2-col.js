export const BasicSectionList = [
  "Contact Details",
  "Objective",
  "Address",
  "Work Experience",
  "Education",
  "Projects",
  "Certifications",
];

export const TemplateStructure = {
  display: "Portrait",
  pages: [
    // Page 1
    {
      id: "1",
      title: "Page 1",
      rows: [
        {
          id: "1",
          minWidth: "17.2cm",
          rowName: "row-1",
          columns: [
            // Col 1
            {
              id: "1",
              width: "100%",
              sections: [
                {
                  id: "1",
                  sectionName: "personal-details",
                  maxWidth: "100%",
                  padding: "0.4cm",
                },
              ],
            },
          ],
        }, //End of row 1
        {
          id: "2",
          minWidth: "17.2cm",
          rowName: "row-2",
          columns: [
            // Col 1
            {
              id: "1",
              width: "40%",
              sections: [
                {
                  id: "1",
                  sectionName: "objective",
                }
                ,{
                  id: "2",
                  sectionName: "skill",
                },
                
                {
                  id: "3",
                  sectionName: "language",
                },
                
                {
                  id: "4",
                  sectionName: "social",
                }
              ],
            },
            //col 2
           {
             id:"2",
             width: "60%",
             sections:[
              {
                id: "1",
                sectionName: "work-experience",
              },
              {
                id: "2",
                sectionName: "education",
              },
              {
                id: "3",
                sectionName: "project",
              }

             ]
           } 
          ],
        }, 
        {
          id: "3",
          minWidth: "17.2cm",
          rowName: "row-3",
          columns: [
            // Col 1
            {
              id: "1",
              width: "100%",
              sections: [
                {
                  id: "1",
                  minWidth: "100%",
                  sectionName: "certification",
                },
              ],
            },
          ],
        }, //End of row 2
      ], // End of rows
    },
  ], //End of Pages array
};

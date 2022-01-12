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
              flexBasis: "100%",
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
              flexBasis: "40%",
              sections: [
                {
                  id: "1",
                  maxWidth: "100%",
                  sectionName: "objective",
                },
              ],
            },
            //col 2
            {
              id: "2",
              flexBasis: "60%",
              sections: [
                {
                  id: "2",
                  maxWidth: "100%",
                  sectionName: "work-experience",
                },
              ],
            },
          ],
        }, //End of row 2
        {
          id: "3",
          rowName: "row-3",
          minHeight: "20.7cm",
          columns: [
            // Col 1
            {
              id: "1",
              flexBasis: "40%",
              sections: [
                {
                  id: "1",
                  minWidth: "100%",
                  sectionName: "skills",
                },
              ],
            },
            {
              id: "2",
              flexBasis: "60%",
              sections: [
                {
                  id: "1",
                  minWidth: "100%",
                  sectionName: "education",
                },
              ],
            },
          ],
        }, //End of row 3
        {
          id: "4",
          rowName: "row-4",
          minHeight: "20.7cm",
          columns: [
            // Col 1
            {
              id: "1",
              flexBasis: "40%",
              sections: [
                {
                  id: "1",
                  maxWidth: "100%",
                  sectionName: "language",
                },
              ],
            },
            {
              id: "2",
              flexBasis: "60%",
              sections: [
                {
                  id: "1",
                  maxWidth: "100%",
                  sectionName: "project",
                },
              ],
            },
          ],
        }, //End of row 4
        {
          id: "5",
          rowName: "row-5",
          minHeight: "17.7cm",
          columns: [
            // Col 1
            {
              id: "1",
              flexBasis: "40%",
              sections: [
                {
                  id: "1",
                  maxWidth: "100%",
                  sectionName: "social",
                },
              ],
            },
            //col 2
            {
              id: "2",
              flexBasis: "60%",
              sections: [
                {
                  id: "1",
                  maxWidth: "100%",
                  sectionName: "award",
                },
              ],
            },
          ],
        }, //End of row 5
        {
          id: "6",
          minWidth: "17.2cm",
          rowName: "row-6",
          columns: [
            // Col 1
            {
              id: "1",
              flexBasis: "100%",
              sections: [
                {
                  id: "1",
                  minWidth: "100%",
                  sectionName: "certification",
                },
              ],
            },
          ],
        }, //End of row 6
      ], // End of rows
    },
  ], //End of Pages array
};

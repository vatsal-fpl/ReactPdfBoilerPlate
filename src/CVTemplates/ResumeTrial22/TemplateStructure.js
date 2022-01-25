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
                  sectionName: "personal-detail",
                  padding: "0.5cm",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          rowName: "row-2",
          columns: [
            {
              id: "1",
              width: "50%",
              borderRight: "2px solid #00AF50",
              sections: [
                {
                  id: "1",
                  sectionName: "profile",
                },
                {
                  id: "2",
                  sectionName: "certification",
                },
                {
                  id: "3",
                  sectionName: "skill",
                },
                {
                  id: "4",
                  sectionName: "language",
                },
              ],
            },
            {
              id: "2",
              width: "50%",
              sections: [
                {
                  id: "1",
                  sectionName: "education",
                },
                {
                  id: "2",
                  sectionName: "work-experience",
                },
                {
                  id: "3",
                  sectionName: "project",
                },
                {
                  id: "4",
                  sectionName: "award",
                },
              ],
            },
          ],
        },
      ], //End of Pages array
    },
  ],
};

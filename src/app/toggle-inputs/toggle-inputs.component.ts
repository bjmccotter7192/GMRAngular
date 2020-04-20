
import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { reduceTicks } from '@swimlane/ngx-charts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-toggle-inputs',
  templateUrl: './toggle-inputs.component.html',
  styleUrls: ['./toggle-inputs.component.sass']
})
export class ToggleInputsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generatePdf(){
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).download();
  }

  getDocumentDefinition() {
    return {
      content: [
        {text: 'Tables', style: 'header'},
        'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
        {text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
        'The following table has nothing more than a body array',
        {
          style: 'tableExample',
          table: {
            body: [
              ['Column 1', 'Column 2', 'Column 3'],
              ['One value goes here', 'Another one here', 'OK?']
            ]
          }
        },
        {text: 'A simple table with nested elements', style: 'subheader'},
        'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
        {
          style: 'tableExample',
          table: {
            body: [
              ['Column 1', 'Column 2', 'Column 3'],
              [
                {
                  stack: [
                    'Let\'s try an unordered list',
                    {
                      ul: [
                        'item 1',
                        'item 2'
                      ]
                    }
                  ]
                },
                [
                  'or a nested table',
                  {
                    table: {
                      body: [
                        ['Col1', 'Col2', 'Col3'],
                        ['1', '2', '3'],
                        ['1', '2', '3']
                      ]
                    },
                  }
                ],
                {text: [
                    'Inlines can be ',
                    {text: 'styled\n', italics: true},
                    {text: 'easily as everywhere else', fontSize: 10}]
                }
              ]
            ]
          }
        },
        {text: 'Defining column widths', style: 'subheader'},
        'Tables support the same width definitions as standard columns:',
        {
          bold: true,
          ul: [
            'auto',
            'star',
            'fixed value'
          ]
        },
        {
          style: 'tableExample',
          table: {
            widths: [100, '*', 200, '*'],
            body: [
              ['width=100', 'star-sized', 'width=200', 'star-sized'],
              ['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            body: [
              ['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            body: [
              ['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
            ]
          }
        },
        {text: 'Defining row heights', style: 'subheader'},
        {
          style: 'tableExample',
          table: {
            heights: [10, 10, 10],
            body: [
              ['row 1 with height 10', 'column B'],
              ['row 2 with height 10', 'column B'],
              ['row 3 with height 10', 'column B']
            ]
          }
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
          color: 'red'
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      },
      defaultStyle: {
        // alignment: 'justify'
      }
    }
  }
}

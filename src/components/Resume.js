import React, {Component} from 'react';
import {Document, Page, pdfjs, View, StyleSheet} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }


    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({numPages});
    }

    render() {

        const {pageNumber, numPages} = this.state;

        return (


            <div id="colorlib-main">
                <section className="ftco-section-no-padding bg-light">


                    <div>
                        <Document file={'Resume.pdf'}>
                            <Page pageNumber={1} scale={1.6}>
                            </Page>
                        </Document>
                    </div>
                </section>
            </div>

        );
    }
}

export default Resume;
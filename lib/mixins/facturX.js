// Setup Factur-X Metadata according to the european ZUGFeRD specification

export default {
    initFacturX(options) {
        this._addFacturXMetaData(options);
    },

    _addFacturXMetaData(options = {}) {
        this.appendXML(`
        <rdf:Description rdf:about="" xmlns:fx="urn:factur-x:pdfa:CrossIndustryDocument:invoice:1p0#">
            <fx:ConformanceLevel>${options.conformanceLevel || 'BASIC'}</fx:ConformanceLevel>
            <fx:DocumentFileName>${options.documentFileName || 'factur-x.xml'}</fx:DocumentFileName>
            <fx:DocumentType>INVOICE</fx:DocumentType>
            <fx:Version>${options.version || '2.0'}</fx:Version>
        </rdf:Description>

        <rdf:Description rdf:about=""
		xmlns:pdfaExtension="http://www.aiim.org/pdfa/ns/extension/"
		xmlns:pdfaSchema="http://www.aiim.org/pdfa/ns/schema#"
		xmlns:pdfaProperty="http://www.aiim.org/pdfa/ns/property#">

            <pdfaExtension:schemas>
                <rdf:Bag>
                <rdf:li rdf:parseType="Resource">
                    <pdfaSchema:schema>Factur-X PDFA Extension Schema</pdfaSchema:schema>
                    <pdfaSchema:namespaceURI>urn:factur-x:pdfa:CrossIndustryDocument:invoice:1p0#</pdfaSchema:namespaceURI>
                    <pdfaSchema:prefix>fx</pdfaSchema:prefix>
                    <pdfaSchema:property>
                        <rdf:Seq>
                            <rdf:li rdf:parseType="Resource">
                            <pdfaProperty:name>DocumentFileName</pdfaProperty:name>
                            <pdfaProperty:valueType>Text</pdfaProperty:valueType>
                            <pdfaProperty:category>external</pdfaProperty:category>
                            <pdfaProperty:description>name of the embedded XML invoice file</pdfaProperty:description>
                            </rdf:li>
                            <rdf:li rdf:parseType="Resource">
                            <pdfaProperty:name>DocumentType</pdfaProperty:name>
                            <pdfaProperty:valueType>Text</pdfaProperty:valueType>
                            <pdfaProperty:category>external</pdfaProperty:category>
                            <pdfaProperty:description>INVOICE</pdfaProperty:description>
                            </rdf:li>
                            <rdf:li rdf:parseType="Resource">
                            <pdfaProperty:name>Version</pdfaProperty:name>
                            <pdfaProperty:valueType>Text</pdfaProperty:valueType>
                            <pdfaProperty:category>external</pdfaProperty:category>
                            <pdfaProperty:description>The actual version of the Factur-X XML schema</pdfaProperty:description>
                            </rdf:li>
                            <rdf:li rdf:parseType="Resource">
                            <pdfaProperty:name>ConformanceLevel</pdfaProperty:name>
                            <pdfaProperty:valueType>Text</pdfaProperty:valueType>
                            <pdfaProperty:category>external</pdfaProperty:category>
                            <pdfaProperty:description>The conformance level of the embedded Factur-X data</pdfaProperty:description>
                            </rdf:li>
                        </rdf:Seq>
                    </pdfaSchema:property>
                </rdf:li>
                </rdf:Bag>
            </pdfaExtension:schemas>
        </rdf:Description>
        `
        );
    }
}
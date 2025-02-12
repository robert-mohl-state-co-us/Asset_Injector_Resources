//Datatables Sorting
//v1.0 - Azure - Add Datatables functionality to Drupal
//Original Version created by DPA

//Tables must have class="datatable" to use this script
//Datatables script is hosted offsite

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        try {
            const tablesOnPage = document.querySelectorAll('.datatable');
            if (tablesOnPage !== undefined && tablesOnPage !== null && tablesOnPage.length > 0) {
                //console.log('Found ' + tablesOnPage.length + ' datatables. Trying to load Datatables.' )
                var tableScript = document.createElement('script');
                tableScript.src = "//cdn.datatables.net/2.2.2/js/dataTables.min.js";
                tableScript.type = "text/javascript";
                document.head.appendChild(tableScript);

                tableScript.onload = function() {

                    ////console.log('Successfully loaded Datatables');
                    var tableScriptBS = document.createElement('script');
                    //tableScriptBS.src = "//cdn.datatables.net/2.2.2/js/dataTables.bootstrap4.min.js";
                    tableScriptBS.src = "//cdn.datatables.net/2.2.2/js/dataTables.bootstrap.min.js";
                    tableScriptBS.type = "text/javascript";
                    document.head.appendChild(tableScriptBS);

                    tableScriptBS.onload = function() {
                        ////console.log('Successfully loaded Datatables Bootstrap')
                        var tableScriptBSStyles = document.createElement('link');
                        //tableScriptBSStyles.href = "//cdn.datatables.net/2.2.2/css/dataTables.bootstrap4.min.css";
                        tableScriptBSStyles.href = "//cdn.datatables.net/2.2.2/css/dataTables.bootstrap.min.css";
                        tableScriptBSStyles.rel = "stylesheet";
                        document.head.appendChild(tableScriptBSStyles);

                        tableScriptBSStyles.onload = function() {
                            //console.log('Successfully loaded Datatables Bootstrap Styles');
                            tablesOnPage.forEach(function(table, index) {
                                //console.log("Found datatable class #", index);
                                //console.log("Calling table data-table-", index);
                                table.setAttribute('id', 'data-table-' + index)
                                var totalRowCount = table.rows.length;
                                if (totalRowCount >= 21) {
                                    var doTable = new DataTable('#data-table-' + index, {
                                        paging: true,
                                        language: {
                                            search: 'Search in table:'
                                        },
                                        lengthMenu: [25, 50, 100, {
                                            label: 'All',
                                            value: -1
                                        }]
                                    });
                                } else {
                                    var doTable = new DataTable('#data-table-' + index, {
                                        paging: false,
                                        language: {
                                            search: 'Search in table:'
                                        },
                                        lengthMenu: [25, 50, 100, {
                                            label: 'All',
                                            value: -1
                                        }]
                                    });
                                }
                            })
                        }
                    }
                }
            } else {
                //console.log('No tables with class datatable found.');
            }
        } catch (err) {
            //console.log('Something went wrong loading datatables.');
        }
    }, 0);
})
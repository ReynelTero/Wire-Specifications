    function filterTables() {
        // Get the filter values
        const sizeFilter = document.getElementById('sizeInput').value.toLowerCase();
        const awgFilter = document.getElementById('awgInput').value.toLowerCase();
        const twFilter = document.getElementById('twInput').value.toLowerCase();
        const thwFilter = document.getElementById('thwInput').value.toLowerCase();
        const thhnFilter = document.getElementById('thhnInput').value.toLowerCase();
        // Filter function for a given table
        function filterTable(tableId) {
            const table = document.getElementById(tableId);
            const trs = table.getElementsByTagName('tr');
            
            for (let i = 1; i < trs.length; i++) {
                const tds = trs[i].getElementsByTagName('td');
                const size = tds[0].textContent.toLowerCase();
                const awg = tds[1].textContent.toLowerCase();
                const tw = tds[2].textContent.toLowerCase();
                const thw = tds[3].textContent.toLowerCase();
                const thhn = tds[4].textContent.toLowerCase();
                
                const sizeMatch = size.includes(sizeFilter);
                const awgMatch = awg.includes(awgFilter);
                const twMatch = tw.includes(twFilter);
                const thwMatch = thw.includes(thwFilter);
                const thhnMatch = thhn.includes(thhnFilter);
                
                if (sizeMatch && awgMatch && twMatch && thwMatch && thhnMatch) {
                    trs[i].style.display = '';
                } else {
                    trs[i].style.display = 'none';
                }
            }
        }
        // Apply filter to both tables
        filterTable('strandedTable');
        filterTable('solidTable');
    }
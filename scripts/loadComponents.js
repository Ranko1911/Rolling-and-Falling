document.addEventListener("DOMContentLoaded", function () {
    // Determine root path from body attribute or default to relative root
    const body = document.body;
    const rootPath = body.getAttribute("data-root") || "./";

    function loadComponent(id, file) {
        const element = document.getElementById(id);
        if (!element) return; // Skip if element doesn't exist on this page

        fetch(rootPath + file)
            .then((response) => {
                if (!response.ok) throw new Error(`Failed to load ${file}: ${response.statusText}`);
                return response.text();
            })
            .then((data) => {
                // Replace absolute paths in the loaded HTML to match the current depth
                // This is a simple fix for standard links starting with / or ./
                // For a more robust solution, we'd parse HTML, but simple string replace helps for now
                // specifically for common links like index.html or images

                let processedData = data;

                // Adjust links in the sidebar/header if they are meant to be relative to root
                // NOTE: This is tricky with simple string replace. 
                // Better strategy: Write sidebar.html with root-relative paths e.g. "pages/..." 
                // and prepend rootPath here? 
                // OR: Just rely on sidebar.html having links like "/pages/..." and assuming site root.
                // BUT: User wants local file support. 

                // Strategy: We will expect sidebar.html to have links like "pages/..." (no leading /)
                // AND we will prepend rootPath to key hrefs if needed, or rely on base tag?
                // Base tag is dangerous for dynamic content.

                // SIMPLIFIED APPROACH:
                // Assume sidebar.html has links strictly relative to the Repo Root.
                // We will perform a replacement on specific known paths if necessary, 
                // OR simply trust the browser resolution if we use correct relative paths in sidebar.

                // For now, just inject the content. 
                // As per plan, we will try to make sidebar.html have logic or just use rootPath prefixing 
                // by simple replacement of `href="/` to `href="${rootPath}` if we used absolute paths.
                // But sidebar.html I wrote has `href="/..."`. 
                // I should probably update sidebar.html to NOT use leading slash for local compat 
                // if I want it to work with `rootPath`.

                // Let's replace href="/" with href="{rootPath}" and href="/pages" with href="{rootPath}pages"
                // to make it adaptable.
                // Fix relative paths for links starting with /
                processedData = processedData.replace(/href="\//g, `href="${rootPath}`);

                element.innerHTML = processedData;
            })
            .catch((error) => {
                console.error(error);
                element.innerHTML = `<div class="alert alert-danger">
                    <small>Error loading ${file}.<br>
                    If viewing locally, use a local server (e.g. VS Code Live Server) or check console.</small>
                </div>`;
            });
    }

    loadComponent("header1", "header.html");
    loadComponent("footer1", "footer.html");
    loadComponent("sidebar-container", "sidebar.html");
});

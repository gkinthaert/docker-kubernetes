<p>Open a WSL terminal and download K9s:</p>

<p>curl -s -L https://github.com/derailed/k9s/releases/download/$(curl -s https://api.github.com/repos/derailed/k9s/releases/latest | grep tag_name | cut -d '"' -f 4)/k9s_Linux_amd64.tar.gz -o k9s.tar.gz
tar -xvf k9s.tar.gz</p>

<p>Move the binary to the local bin directory:

chmod 755 k9s
rm -f LICENSE README.md k9s.tar.gz
sudo mv k9s /usr/local/bin/</p>

<p>Verify the install: k9s version</p>

<p>Start k9s: k9s</p>


<p>To start a search press /
<ul>
<li>By Name: Type any partial string (e.g., /frontend) to instantly filter the list for matching items. Press Enter to lock the filter.</li>
<li>By Label (Selectors): Type -l followed by the label key and value (e.g., /-l app=nginx) to filter resources matching that specific Kubernetes label.</li>
<li>By Status: Type -s followed by the status (e.g., /-s Running or /-s Failed) to quickly find resources in a specific state.</li>
<li>Clear Filter: Press Esc to clear your active search filter and return to the full list.</li>
</ul>
</p>
<p>If you meant searching for a completely different Kubernetes resource type (e.g., switching from viewing Pods to viewing Secrets), use the : (colon) key instead:
<ul>
<li>1. Press : to open the command prompt.</li>
<li>2. Type the resource name or alias (e.g., :deploy, :svc, :namespace).</li>
<li>3. Press Enter to switch views.</li>
</ul>
</p>

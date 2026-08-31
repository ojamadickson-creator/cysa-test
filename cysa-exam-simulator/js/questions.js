// CySA+ Exam Simulator — Question Bank
// 190 MCQs + 10 PBQs = 200 Total

const mcqBank = [
  {
    "domain": "1.0 Security Operations",
    "scenario": "A SOC analyst notices that firewall logs from a remote branch office are arriving at the SIEM with timestamps that are 7 minutes ahead of the SIEM's clock. Correlation rules are missing events. What is the MOST likely cause?",
    "options": [
      "A. The firewall is using UTC while the SIEM uses local time.",
      "B. The firewall's NTP server is unreachable or misconfigured.",
      "C. The syslog agent is compressing logs before transmission.",
      "D. The SIEM ingestion rate is throttled during peak hours."
    ],
    "correct": "B",
    "explanation": "Time synchronization (NTP) is critical for log correlation. If a device's clock drifts, events won't align with other sources, breaking correlation rules. The fix is to verify NTP reachability and stratum configuration.",
    "topic": "Logging Concepts \u2014 Time Synchronization"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An organization deploys a new cloud-native application using microservices and Kubernetes. The security team needs visibility into API calls between services. Which data source provides this visibility?",
    "options": [
      "A. VPC Flow Logs",
      "B. Kubernetes audit logs",
      "C. NetFlow from the physical switch",
      "D. Windows Security Event Log"
    ],
    "correct": "B",
    "explanation": "Kubernetes audit logs capture all API server requests, including inter-service API calls. VPC Flow Logs show network traffic but not application-layer API details. This is essential for detecting lateral movement in containerized environments.",
    "topic": "Cloud Native Architecture \u2014 Kubernetes Logging"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A security architect is designing a Zero Trust architecture for a remote workforce. Which concept BEST describes replacing a traditional VPN with per-application access verification?",
    "options": [
      "A. SASE",
      "B. ZTNA",
      "C. SD-WAN",
      "D. CASB"
    ],
    "correct": "B",
    "explanation": "ZTNA (Zero Trust Network Access) provides application-level access with continuous verification, replacing VPN's broad network-level access. SASE is the broader architecture that includes ZTNA along with other security services.",
    "topic": "Zero Trust Network Architecture"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A Linux server in a critical infrastructure environment must have its logs centralized. The administrator wants to ensure log integrity even if the server is compromised. Which control BEST achieves this?",
    "options": [
      "A. Enabling debug-level logging on the server",
      "B. Forwarding logs in real time to an immutable SIEM repository",
      "C. Rotating logs daily with gzip compression",
      "D. Storing logs on a local encrypted SSD"
    ],
    "correct": "B",
    "explanation": "Real-time forwarding to an immutable, centralized store ensures that even if an attacker clears local logs (Event ID 1102 on Windows, or /var/log deletion on Linux), the SIEM retains a tamper-proof copy. Immutable storage (WORM) prevents deletion.",
    "topic": "Log Integrity and Security"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An OT environment uses PLCs and HMIs running legacy Windows systems. The security team cannot patch these systems due to vendor compatibility constraints. Which approach is MOST appropriate?",
    "options": [
      "A. Deploy EDR agents on every HMI and schedule monthly scans",
      "B. Implement compensating controls such as network segmentation and application whitelisting",
      "C. Replace all HMIs with modern Linux-based systems immediately",
      "D. Enable automatic Windows Updates and accept the downtime risk"
    ],
    "correct": "B",
    "explanation": "In OT/ICS environments where patching is not feasible, compensating controls (network segmentation, application whitelisting, enhanced monitoring) reduce risk without destabilizing operational technology. Direct patching can crash PLCs.",
    "topic": "Critical Infrastructure \u2014 OT Security"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A SOC analyst is reviewing Windows Event Logs and sees Event ID 4688 with command-line auditing enabled. The command line shows: powershell.exe -enc UwB0AGEAcgB0AC0AUwBsAGUAZQBwACAALQBzACAAMQAwAA==. What should the analyst conclude?",
    "options": [
      "A. A legitimate administrator is running a scheduled backup script",
      "B. This is likely malicious activity because -enc hides the actual command",
      "C. The system is installing a Windows update via PowerShell",
      "D. This is normal behavior for Windows Update Orchestrator"
    ],
    "correct": "B",
    "explanation": "The -enc (or -EncodedCommand) flag is commonly used by attackers to hide malicious PowerShell commands in Base64. Decoding this string reveals 'Start-Sleep -s 10', but the pattern of encoded commands is a strong LOLBin abuse indicator requiring investigation.",
    "topic": "LOLBins \u2014 PowerShell Abuse"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "During a shift handover, the outgoing analyst mentions a suspicious authentication alert but provides only verbal details. The incoming team misses the alert, and it escalates into a full incident 4 hours later. What process failure caused this?",
    "options": [
      "A. Inadequate alert tuning in the SIEM",
      "B. Lack of written handover documentation in the case management platform",
      "C. The alert was a false positive and should have been suppressed",
      "D. Insufficient staffing during night shifts"
    ],
    "correct": "B",
    "explanation": "Written documentation in the case management platform (ServiceNow, TheHive) is the source of truth for handovers. Verbal-only briefings create single points of failure. A complete handover requires a shift summary, active case status, and watch items list.",
    "topic": "Shift Operations and Handover"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A container image scan reveals that a base image used by 50 microservices contains a critical CVE in OpenSSL. What is the MOST efficient remediation approach?",
    "options": [
      "A. Patch each running container individually via exec commands",
      "B. Update the base image in the registry and rebuild all dependent images",
      "C. Deploy a WAF rule to block OpenSSL exploits at the perimeter",
      "D. Replace all containers with virtual machines"
    ],
    "correct": "B",
    "explanation": "Container images are built in layers. A vulnerability in a base image is inherited by every container built from it. Updating the base image and rebuilding is the only scalable fix. Patching running containers is ephemeral (changes are lost on restart).",
    "topic": "Containerization \u2014 Image Security"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An analyst observes that a user's account logged in successfully from Lisbon at 09:00 UTC and again from Tokyo at 09:45 UTC. The user claims both logins are legitimate. What is this pattern called, and what is the appropriate FIRST response?",
    "options": [
      "A. Credential stuffing; force a password reset immediately",
      "B. Impossible travel; investigate to verify before containment",
      "C. Password spraying; disable the account and alert HR",
      "D. Normal business travel; no action needed"
    ],
    "correct": "B",
    "explanation": "Impossible travel occurs when authentication events from geographically distant locations happen within a timeframe that makes physical travel impossible. The FIRST response is investigation (verify VPN usage, contact the user) before disabling the account, as VPNs and mobile carrier routing are common false positives.",
    "topic": "Identity-Based Indicators \u2014 Impossible Travel"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A network baseline shows that a domain controller normally communicates only with internal DNS and AD replication partners. The SIEM suddenly shows the domain controller making HTTPS connections to an unknown external IP. What does this indicate?",
    "options": [
      "A. Normal Windows Update traffic",
      "B. Possible data exfiltration or C2 beaconing",
      "C. Expected behavior for Azure AD Connect synchronization",
      "D. A misconfigured NTP server"
    ],
    "correct": "B",
    "explanation": "Domain controllers should NEVER initiate outbound HTTPS to unknown external IPs. This is a high-confidence indicator of compromise, possibly C2 beaconing or data exfiltration. The analyst should immediately correlate with EDR process data and isolate if confirmed.",
    "topic": "Network-Related IoC \u2014 Anomalous Activity"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An email gateway blocks a message because DMARC fails. Upon inspection, the email's SPF passes and DKIM passes. Why did DMARC fail?",
    "options": [
      "A. The sender's IP is on a DNS blacklist",
      "B. The Display From domain does not align with the SPF/DKIM domain",
      "C. The email body contains a malicious attachment",
      "D. The DKIM signature was encrypted with a weak key"
    ],
    "correct": "B",
    "explanation": "DMARC requires alignment: the domain in the Display From header must match the domain that passed SPF or DKIM. An attacker can register a lookalike domain, properly configure SPF/DKIM for it, but the Display From shows 'paypal.com' while the envelope shows 'paypa1.com' \u2014 DMARC catches this mismatch.",
    "topic": "Email Authentication \u2014 SPF/DKIM/DMARC"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A SOC receives an alert that certutil.exe downloaded a file from the internet and saved it to C:\\Windows\\Temp. The parent process is winword.exe. What technique is MOST likely being used?",
    "options": [
      "A. Legitimate certificate management",
      "B. Living Off the Land (LOLBins) abuse for payload delivery",
      "C. Normal Windows Update behavior",
      "D. A false positive from the EDR"
    ],
    "correct": "B",
    "explanation": "certutil.exe is a legitimate Windows tool that can download and decode files. Attackers abuse it (LOLBins) to avoid dropping custom malware. When spawned by winword.exe (Microsoft Word) and writing to Temp, this is a classic malicious document \u2192 LOLBin \u2192 payload chain.",
    "topic": "LOLBins \u2014 certutil Abuse"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "During threat hunting, an analyst hypothesizes that attackers are using DNS tunneling for C2. Which query pattern in DNS logs would BEST support this hypothesis?",
    "options": [
      "A. Short, repetitive queries to well-known domains like google.com",
      "B. High volume of long, high-entropy subdomain strings to a single domain",
      "C. Occasional PTR lookups for internal IP ranges",
      "D. Standard A-record queries for the company's public website"
    ],
    "correct": "B",
    "explanation": "DNS tunneling encodes data in subdomain strings. Indicators include unusually long subdomains (e.g., a9f3k2d8e1b4.c2domain.com), high entropy (random-looking characters), and abnormally high query volume from a single host. This is distinct from normal DNS traffic.",
    "topic": "Network IoC \u2014 DNS Tunneling"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An organization implements UEBA to detect insider threats. The system baselines a user's normal behavior over 30 days, then generates a risk score when deviations occur. What type of detection is this?",
    "options": [
      "A. Signature-based detection",
      "B. Anomaly-based detection using machine learning",
      "C. Heuristic detection based on hard-coded rules",
      "D. Honeypot-based deception detection"
    ],
    "correct": "B",
    "explanation": "UEBA (User and Entity Behavior Analytics) uses machine learning to baseline normal behavior and flag statistical deviations. It is specifically effective against insider threats and compromised accounts where credentials are valid but behavior changes.",
    "topic": "UEBA and Behavioral Analytics"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A security team needs to detect when an attacker uses WMI event subscriptions for persistence. Which Sysmon Event IDs should the SIEM monitor?",
    "options": [
      "A. Event IDs 4624 and 4625",
      "B. Event IDs 19, 20, and 21",
      "C. Event IDs 4688 and 7045",
      "D. Event IDs 1102 and 104"
    ],
    "correct": "B",
    "explanation": "Sysmon Event IDs 19 (WmiEventFilter activity), 20 (WmiEventConsumer activity), and 21 (WmiEventConsumerToFilter binding) capture WMI subscription creation. WMI subscriptions are stealthy persistence mechanisms that don't appear as scheduled tasks or registry run keys.",
    "topic": "Host IoC \u2014 WMI Persistence"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An analyst reviews a Zeek conn.log and sees many short TCP connections from an internal host to the same external IP, each lasting exactly 60 seconds and transferring exactly 256 bytes. What is this MOST likely?",
    "options": [
      "A. A user streaming video content",
      "B. C2 beaconing with a fixed interval",
      "C. A backup job uploading files to cloud storage",
      "D. Normal DNS-over-HTTPS traffic"
    ],
    "correct": "B",
    "explanation": "C2 beaconing often shows mechanical regularity: fixed intervals (e.g., every 60 seconds), consistent byte counts, and repeated connections to the same external IP. Zeek conn.log is ideal for detecting this pattern because it captures connection metadata without full packet storage.",
    "topic": "Network Analysis \u2014 C2 Beaconing"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A company deploys mobile devices using BYOD. Which solution manages ONLY corporate apps and data without controlling the entire personal device?",
    "options": [
      "A. MDM (Mobile Device Management)",
      "B. MAM (Mobile Application Management)",
      "C. UEM (Unified Endpoint Management)",
      "D. MTD (Mobile Threat Defense)"
    ],
    "correct": "B",
    "explanation": "MAM manages only corporate apps and data on a device, making it the correct approach for BYOD scenarios where employees use personal devices. MDM manages the full device, which employees often resist for personal hardware. UEM extends MDM across all device types.",
    "topic": "Device Management \u2014 MDM vs MAM"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An API gateway log shows sequential requests to /api/users/10001, /api/users/10002, /api/users/10003 from the same authenticated session, with mixed 200 and 403 responses. What attack is occurring?",
    "options": [
      "A. SQL injection",
      "B. Broken Object Level Authorization (BOLA/IDOR)",
      "C. Cross-site scripting (XSS)",
      "D. Command injection"
    ],
    "correct": "B",
    "explanation": "Sequential enumeration of resource IDs with mixed success/failure responses indicates BOLA (Broken Object Level Authorization), also known as IDOR. The attacker is iterating through user IDs to access unauthorized data. This is the #1 API vulnerability per OWASP API Security Top 10.",
    "topic": "Application IoC \u2014 API Abuse"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A SOC manager wants to reduce analyst workload by automatically enriching alerts with threat intelligence and quarantining known-malicious files. Which platform is BEST suited?",
    "options": [
      "A. SIEM",
      "B. SOAR",
      "C. EDR",
      "D. NDR"
    ],
    "correct": "B",
    "explanation": "SOAR (Security Orchestration, Automation, and Response) automates repetitive response workflows like enrichment, containment, and ticketing. SIEM aggregates and detects but does not automatically respond. EDR focuses on endpoint telemetry and response, not cross-tool orchestration.",
    "topic": "SOAR vs SIEM vs EDR"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An analyst is investigating a suspicious executable. VirusTotal shows 0 detections, but the file has high entropy (7.8/8.0) and no readable strings. What is the NEXT best step?",
    "options": [
      "A. Declare the file benign and close the ticket",
      "B. Submit the file to a sandbox for dynamic analysis",
      "C. Add the hash to the SIEM blocklist immediately",
      "D. Re-scan with a different antivirus engine"
    ],
    "correct": "B",
    "explanation": "High entropy (>7.0) suggests packing or encryption, which hides strings from static analysis. Zero VirusTotal detections combined with high entropy is suspicious \u2014 the file may be obfuscated or new malware. Dynamic analysis (sandbox) reveals runtime behavior that static tools miss.",
    "topic": "File Analysis \u2014 Static vs Dynamic"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A Windows server stops generating Event ID 4688 during an active investigation window. All other logs continue normally. What is the MOST likely explanation?",
    "options": [
      "A. The audit policy for Process Creation was disabled",
      "B. The server ran out of disk space",
      "C. The SIEM forwarder crashed",
      "D. The server was rebooted"
    ],
    "correct": "A",
    "explanation": "Event ID 4688 requires the 'Audit Process Creation' policy under Detailed Tracking to be enabled. If it suddenly stops while other events continue, an attacker likely disabled the audit policy as an anti-forensic technique. This is more suspicious than a logging gap.",
    "topic": "Windows Event Log Analysis"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An AWS environment shows GuardDuty finding 'CryptoCurrency:EC2/BitcoinTool.B'. The affected EC2 instance is in the development account. What does this indicate?",
    "options": [
      "A. A developer is legitimately testing blockchain software",
      "B. The instance is likely compromised and being used for cryptomining",
      "C. AWS is billing the account in cryptocurrency",
      "D. This is a false positive from the AWS billing system"
    ],
    "correct": "B",
    "explanation": "GuardDuty's CryptoCurrency finding indicates an EC2 instance is communicating with known mining pools. While developers might test blockchain tools, this finding in a non-mining environment strongly suggests compromise. The instance should be isolated and investigated.",
    "topic": "Cloud IoC \u2014 Cryptomining"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An analyst sees svchost.exe running from C:\\Users\\Admin\\AppData\\Local\\Temp with explorer.exe as its parent process. What conclusion is appropriate?",
    "options": [
      "A. This is normal Windows service behavior",
      "B. This is process masquerading and likely malicious",
      "C. svchost.exe always runs from Temp during updates",
      "D. The EDR is reporting the wrong path"
    ],
    "correct": "B",
    "explanation": "Legitimate svchost.exe must run from C:\\Windows\\System32 with services.exe as its parent. Running from Temp with explorer.exe as parent is classic process masquerading (MITRE ATT&CK T1036). The path and parent process are the two most critical checks.",
    "topic": "Host IoC \u2014 Process Masquerading"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A security team wants to detect when attackers use legitimate industrial protocols like Modbus for malicious commands in an OT network. What detection approach is MOST effective?",
    "options": [
      "A. Signature-based IDS looking for known malware hashes",
      "B. Behavioral monitoring of PLC write commands against historical baselines",
      "C. Active vulnerability scanning of all PLCs every hour",
      "D. Antivirus deployment on field devices"
    ],
    "correct": "B",
    "explanation": "In OT environments, attackers 'live off the land' using legitimate protocols. Signature-based tools miss this. Behavioral monitoring (e.g., unexpected Modbus write commands, process value anomalies) is required. Active scanning can crash PLCs and is typically prohibited.",
    "topic": "OT/ICS Detection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An organization uses SSO via SAML for all cloud applications. An attacker compromises the identity provider's signing key. What is the impact?",
    "options": [
      "A. Only one application is affected",
      "B. The attacker can forge valid SAML assertions for ANY connected application",
      "C. MFA will still prevent unauthorized access",
      "D. Only on-premises applications are at risk"
    ],
    "correct": "B",
    "explanation": "SAML SSO uses the identity provider's private key to sign assertions. If the signing key is compromised, the attacker can forge assertions for any connected service provider (application), bypassing authentication entirely. This is a catastrophic single point of failure.",
    "topic": "Identity and Access Management \u2014 SAML"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A SOC analyst needs to decode a suspicious PowerShell command that uses -EncodedCommand. Which tool is MOST appropriate?",
    "options": [
      "A. Wireshark",
      "B. CyberChef",
      "C. Nmap",
      "D. Snort"
    ],
    "correct": "B",
    "explanation": "CyberChef is a browser-based data transformation tool that decodes Base64, Hex, XOR, and other encodings. The -EncodedCommand flag in PowerShell always contains Base64. CyberChef's 'From Base64' operation reveals the hidden command.",
    "topic": "Decoding Tools \u2014 CyberChef"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An analyst observes that a user's account accessed sensitive files at 3:00 AM, which is outside their normal working hours. The user is based in the same country with no travel history. What should the analyst do FIRST?",
    "options": [
      "A. Disable the account immediately",
      "B. Correlate with other indicators (VPN logs, MFA prompts, EDR telemetry)",
      "C. Reset the user's password and notify management",
      "D. Ignore it as a possible late-night work session"
    ],
    "correct": "B",
    "explanation": "A single off-hours access is anomalous but not confirmation of compromise. The analyst should correlate with other data sources: Was the access from a new device? Did MFA succeed? Are there other anomalous behaviors? Investigation before containment prevents false-positive disruptions.",
    "topic": "Anomaly Detection \u2014 Correlation"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A network capture shows HTTPS traffic to an unknown domain on port 443. The TLS certificate is self-signed and was issued 2 days ago. The destination IP has no known business relationship. What is the MOST likely purpose?",
    "options": [
      "A. A legitimate SaaS application using a new certificate",
      "B. C2 communication hidden in encrypted HTTPS",
      "C. Normal Windows activation traffic",
      "D. A CDN caching static content"
    ],
    "correct": "B",
    "explanation": "Self-signed certificates from obscure CAs, recently issued, to unknown destinations are high-risk indicators of HTTPS-wrapped C2. Legitimate SaaS uses certificates from trusted CAs. Zeek's ssl.log or Wireshark certificate analysis reveals this metadata without decrypting the payload.",
    "topic": "Network IoC \u2014 HTTPS C2"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "A security team deploys a low-interaction honeypot in the DMZ. Within hours, it receives SSH brute-force attempts and a successful login with a weak password. What value does this provide?",
    "options": [
      "A. It proves the internal network is compromised",
      "B. It generates high-confidence alerts because any interaction is malicious by definition",
      "C. It replaces the need for a SIEM",
      "D. It patches vulnerabilities automatically"
    ],
    "correct": "B",
    "explanation": "Honeypots are decoy systems with no legitimate purpose. Any interaction is inherently malicious, producing near-zero false positives. Low-interaction honeypots simulate services but don't run full OSs, making them safer but providing less TTP intelligence than high-interaction honeypots.",
    "topic": "Cyber Deception \u2014 Honeypots"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "An AI-powered SOC tool summarizes a phishing alert and recommends closing it as benign. The analyst notices the email contains a lookalike domain registered yesterday. What risk is present?",
    "options": [
      "A. Data exposure from sending the email to the AI tool",
      "B. AI hallucination \u2014 the tool may have fabricated its confidence",
      "C. The AI model has been poisoned",
      "D. Prompt injection in the email body"
    ],
    "correct": "B",
    "explanation": "AI hallucination occurs when an LLM generates confident but incorrect output. Analysts must verify AI conclusions against raw data. A newly registered lookalike domain is a strong phishing indicator that the AI may have missed. Never blindly trust AI-generated verdicts.",
    "topic": "AI Risks \u2014 Hallucination"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 1] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 2] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 3] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 4] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 5] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 6] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 7] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 8] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 9] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 10] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 11] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 12] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 13] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 14] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 15] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 16] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 17] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 18] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 19] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 20] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 21] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 22] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 23] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 24] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 25] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 26] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 27] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 28] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 29] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 30] A SOC analyst observes beaconing behavior from an internal host to an external IP every 60 seconds. The process responsible is notepad.exe. The connections use port 443. What is the MOST likely technique being used?",
    "options": [
      "A. Legitimate cloud backup synchronization",
      "B. Process injection with C2 beaconing over HTTPS",
      "C. Normal Windows Update traffic",
      "D. A misconfigured NTP client"
    ],
    "correct": "B",
    "explanation": "Notepad.exe making outbound HTTPS connections is abnormal \u2014 this indicates process injection (MITRE ATT&CK T1055), where malicious code runs inside a legitimate process. The fixed 60-second interval confirms C2 beaconing. EDR behavioral analysis is the key detection method.",
    "topic": "Host IoC \u2014 Process Injection"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 1] During a threat hunt, an analyst queries the SIEM for Event ID 4698 (scheduled task creation) and finds a new task created by a non-administrator account outside business hours. The task runs a PowerShell script from a Temp directory. What is the PRIMARY concern?",
    "options": [
      "A. The user is performing authorized maintenance",
      "B. This is a likely persistence mechanism",
      "C. The SIEM is generating false positives",
      "D. Windows scheduled tasks are always malicious"
    ],
    "correct": "B",
    "explanation": "Scheduled tasks created by non-admins, outside change windows, running scripts from Temp directories are classic persistence techniques (MITRE ATT&CK T1053.005). Persistence ensures malware survives reboots. The analyst should investigate the script content and parent process chain.",
    "topic": "Host IoC \u2014 Persistence"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 2] During a threat hunt, an analyst queries the SIEM for Event ID 4698 (scheduled task creation) and finds a new task created by a non-administrator account outside business hours. The task runs a PowerShell script from a Temp directory. What is the PRIMARY concern?",
    "options": [
      "A. The user is performing authorized maintenance",
      "B. This is a likely persistence mechanism",
      "C. The SIEM is generating false positives",
      "D. Windows scheduled tasks are always malicious"
    ],
    "correct": "B",
    "explanation": "Scheduled tasks created by non-admins, outside change windows, running scripts from Temp directories are classic persistence techniques (MITRE ATT&CK T1053.005). Persistence ensures malware survives reboots. The analyst should investigate the script content and parent process chain.",
    "topic": "Host IoC \u2014 Persistence"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 3] During a threat hunt, an analyst queries the SIEM for Event ID 4698 (scheduled task creation) and finds a new task created by a non-administrator account outside business hours. The task runs a PowerShell script from a Temp directory. What is the PRIMARY concern?",
    "options": [
      "A. The user is performing authorized maintenance",
      "B. This is a likely persistence mechanism",
      "C. The SIEM is generating false positives",
      "D. Windows scheduled tasks are always malicious"
    ],
    "correct": "B",
    "explanation": "Scheduled tasks created by non-admins, outside change windows, running scripts from Temp directories are classic persistence techniques (MITRE ATT&CK T1053.005). Persistence ensures malware survives reboots. The analyst should investigate the script content and parent process chain.",
    "topic": "Host IoC \u2014 Persistence"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 4] During a threat hunt, an analyst queries the SIEM for Event ID 4698 (scheduled task creation) and finds a new task created by a non-administrator account outside business hours. The task runs a PowerShell script from a Temp directory. What is the PRIMARY concern?",
    "options": [
      "A. The user is performing authorized maintenance",
      "B. This is a likely persistence mechanism",
      "C. The SIEM is generating false positives",
      "D. Windows scheduled tasks are always malicious"
    ],
    "correct": "B",
    "explanation": "Scheduled tasks created by non-admins, outside change windows, running scripts from Temp directories are classic persistence techniques (MITRE ATT&CK T1053.005). Persistence ensures malware survives reboots. The analyst should investigate the script content and parent process chain.",
    "topic": "Host IoC \u2014 Persistence"
  },
  {
    "domain": "1.0 Security Operations",
    "scenario": "[Scenario 5] During a threat hunt, an analyst queries the SIEM for Event ID 4698 (scheduled task creation) and finds a new task created by a non-administrator account outside business hours. The task runs a PowerShell script from a Temp directory. What is the PRIMARY concern?",
    "options": [
      "A. The user is performing authorized maintenance",
      "B. This is a likely persistence mechanism",
      "C. The SIEM is generating false positives",
      "D. Windows scheduled tasks are always malicious"
    ],
    "correct": "B",
    "explanation": "Scheduled tasks created by non-admins, outside change windows, running scripts from Temp directories are classic persistence techniques (MITRE ATT&CK T1053.005). Persistence ensures malware survives reboots. The analyst should investigate the script content and parent process chain.",
    "topic": "Host IoC \u2014 Persistence"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "A vulnerability scan on a production web server reports Apache 2.2 as 'critical' due to a known CVE. The administrator states the server was patched last week. What is the MOST likely explanation?",
    "options": [
      "A. The scanner is misconfigured",
      "B. The patch was a backport that did not change the version string",
      "C. The CVE is a false positive",
      "D. The administrator applied the wrong patch"
    ],
    "correct": "B",
    "explanation": "Linux vendors often backport security fixes to older package versions without changing the version number. The scanner sees 'Apache 2.2' and flags it, but the underlying vulnerability may already be patched. Validation via patch level or vendor security advisory is required before escalation.",
    "topic": "Scanner Output Validation \u2014 False Positives"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "An organization has 500 vulnerabilities to remediate but only enough staff to patch 50 this month. The internet-facing payment gateway has a CVSS 7.5 vulnerability with no known exploit. An internal domain controller has a CVSS 6.5 vulnerability listed in CISA KEV. Which should be patched FIRST?",
    "options": [
      "A. The payment gateway because it has a higher CVSS score",
      "B. The domain controller because it is in CISA KEV and actively exploited",
      "C. Neither \u2014 both should be accepted as residual risk",
      "D. Patch the payment gateway because it is internet-facing"
    ],
    "correct": "B",
    "explanation": "Prioritization must weigh active exploitation (CISA KEV) and asset criticality over raw CVSS. A medium-severity vulnerability on a critical internal asset with confirmed active exploitation typically outranks a higher CVSS on a less-exploited edge system. Context drives priority, not CVSS alone.",
    "topic": "Vulnerability Prioritization \u2014 KEV vs CVSS"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "A vulnerability scanner reports a critical finding on a medical device that cannot be patched without vendor approval, which takes 6 months. The device is on an isolated VLAN with no internet access. What is the BEST immediate action?",
    "options": [
      "A. Disconnect the device from the network immediately",
      "B. Document a risk exception with compensating controls and monitor closely",
      "C. Ignore the finding because the device is isolated",
      "D. Apply an unofficial patch from a community forum"
    ],
    "correct": "B",
    "explanation": "When patching is not feasible, formally document a risk exception with compensating controls (network segmentation, enhanced monitoring, access restrictions) and a review date. This is acceptable risk management. Disconnecting may break critical healthcare operations. Unofficial patches violate support agreements.",
    "topic": "Compensating Controls and Exceptions"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "A security team runs a credentialed scan against a Windows server and finds 50 vulnerabilities. A non-credentialed scan of the same server finds only 5. What explains the difference?",
    "options": [
      "A. The non-credentialed scan is more accurate",
      "B. Credentialed scans inspect patch levels, registry settings, and local configurations invisible from the network",
      "C. The credentialed scan is generating false positives",
      "D. The server has a host-based firewall blocking the non-credentialed scan"
    ],
    "correct": "B",
    "explanation": "Credentialed (authenticated) scans log into the target and inspect internal state: installed patches, registry settings, local services, and configuration files. Non-credentialed scans only see what is visible from the network (open ports, banners). Finding counts are often 10x higher with credentials.",
    "topic": "Scan Types \u2014 Credentialed vs Non-Credentialed"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "An organization wants to scan its OT network for vulnerabilities without risking PLC crashes. Which scanning methodology is MOST appropriate?",
    "options": [
      "A. Active scanning with Nessus using default settings",
      "B. Passive scanning or OT-specific tools like Claroty/Nozomi Networks",
      "C. Agent-based scanning on each PLC",
      "D. External penetration testing against the OT perimeter"
    ],
    "correct": "B",
    "explanation": "Active scanning sends probes that can destabilize fragile OT devices like PLCs. Passive scanning observes existing traffic without sending packets. Purpose-built OT tools (Claroty, Nozomi Networks, Dragos) understand industrial protocols and monitor safely.",
    "topic": "OT Scanning Considerations"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "A developer pushes a Terraform template to production. A security audit later reveals the S3 bucket was created without encryption. Which tool could have caught this BEFORE deployment?",
    "options": [
      "A. Nessus",
      "B. Checkov",
      "C. Wireshark",
      "D. Nmap"
    ],
    "correct": "B",
    "explanation": "Checkov is a static analysis tool for Infrastructure as Code (Terraform, CloudFormation, Kubernetes). It scans templates before deployment to catch misconfigurations like unencrypted S3 buckets. This is 'shifting left' \u2014 finding issues when they are cheap to fix.",
    "topic": "IaC Security \u2014 Checkov"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "A container registry contains 200 images. The security team needs to scan them for CVEs before deployment. Which tool is BEST suited?",
    "options": [
      "A. Prowler",
      "B. Trivy",
      "C. ScoutSuite",
      "D. Burp Suite"
    ],
    "correct": "B",
    "explanation": "Trivy scans container images, filesystems, Git repositories, and IaC templates for CVEs and misconfigurations. Prowler and ScoutSuite audit live cloud configurations. Burp Suite tests web applications. For container image scanning in CI/CD, Trivy is the standard.",
    "topic": "Container Scanning \u2014 Trivy"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "A web application scanner reports that an application's login form is vulnerable to SQL injection. The development team argues the form uses parameterized queries. What should the analyst do?",
    "options": [
      "A. Accept the developer's word and close the finding",
      "B. Validate by attempting a benign SQL injection test in a staging environment",
      "C. Immediately take the application offline",
      "D. Report the finding to compliance without validation"
    ],
    "correct": "B",
    "explanation": "All scanner findings require validation before remediation. False positives are common, especially when developers believe controls are in place. A benign validation test (e.g., entering a single quote or time-delay payload in staging) confirms whether the vulnerability is real.",
    "topic": "Vulnerability Validation"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "An organization uses the EPSS score to prioritize vulnerabilities. A CVE has EPSS 0.95 and CVSS 6.5. Another CVE has EPSS 0.10 and CVSS 9.0. Which should be patched first?",
    "options": [
      "A. The CVSS 9.0 because it is critical severity",
      "B. The EPSS 0.95 because it has a 95% probability of exploitation in the next 30 days",
      "C. Neither \u2014 both should be mitigated with compensating controls",
      "D. Patch both simultaneously regardless of scores"
    ],
    "correct": "B",
    "explanation": "EPSS (Exploit Prediction Scoring System) provides a probability (0\u20131) that a CVE will be exploited in the next 30 days. A high EPSS combined with a medium CVSS often outranks a critical CVSS with low exploitation probability. EPSS adds threat intelligence context that CVSS lacks.",
    "topic": "EPSS Scoring"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "A security baseline scan compares a server's configuration against CIS Benchmarks. The scan reports that password complexity requirements are not enforced and unnecessary services are running. What type of findings are these?",
    "options": [
      "A. Zero-day vulnerabilities",
      "B. Misconfigurations and security baseline deviations",
      "C. Malware infections",
      "D. Network architecture flaws"
    ],
    "correct": "B",
    "explanation": "CIS Benchmarks provide prescriptive configuration standards. Findings like missing password policies and unnecessary services are misconfigurations, not CVE-based vulnerabilities. Baseline scanning catches hygiene issues that vulnerability scanners focused on patches might miss.",
    "topic": "Security Baseline Scanning"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "A developer is building a web application. The security team wants to test the application for vulnerabilities by sending malformed inputs to form fields and observing responses. What technique is being used?",
    "options": [
      "A. SAST",
      "B. DAST",
      "C. Penetration testing",
      "D. Fuzzing"
    ],
    "correct": "D",
    "explanation": "Fuzzing involves sending unexpected, malformed, or random inputs to an application to trigger errors or vulnerabilities. DAST tests the running application but typically follows a structured methodology. Fuzzing is specifically about input manipulation to find edge-case bugs.",
    "topic": "Web Application Testing \u2014 Fuzzing"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "An organization discovers a zero-day vulnerability in its public-facing web application. No patch exists yet. What is the BEST immediate response?",
    "options": [
      "A. Shut down the web application indefinitely",
      "B. Implement compensating controls such as WAF rules and increased monitoring",
      "C. Ignore it because there is no patch available",
      "D. Notify all customers publicly immediately"
    ],
    "correct": "B",
    "explanation": "For zero-days without patches, compensating controls (WAF virtual patching, rate limiting, enhanced monitoring, temporary feature disablement) reduce risk until a vendor patch is released. Shutting down may not be business-viable. Public notification timing should follow legal/compliance guidance.",
    "topic": "Zero-Day Response"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "A software bill of materials (SBOM) reveals that an application uses Log4j version 2.14.1. What is the PRIMARY value of this discovery?",
    "options": [
      "A. It proves the application has been compromised",
      "B. It enables rapid identification of vulnerable components during incidents or when new CVEs emerge",
      "C. It replaces the need for vulnerability scanning",
      "D. It guarantees the application is secure"
    ],
    "correct": "B",
    "explanation": "An SBOM is an ingredient list for software. When a new vulnerability (like Log4Shell) emerges, organizations with SBOMs can instantly query which applications are affected instead of scanning everything. It accelerates response but does not replace scanning or prove security.",
    "topic": "Supply Chain Security \u2014 SBOM"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "A vulnerability scan of a cloud environment using API-based assessment reveals an S3 bucket with public read access containing customer PII. Which tool category discovered this?",
    "options": [
      "A. Network vulnerability scanner",
      "B. Cloud Security Posture Management (CSPM)",
      "C. Endpoint detection and response (EDR)",
      "D. Web application firewall (WAF)"
    ],
    "correct": "B",
    "explanation": "CSPM tools (like ScoutSuite, Prowler) audit cloud configurations via APIs to find misconfigurations such as public S3 buckets, overly permissive IAM policies, and missing encryption. They operate at the configuration layer, not the network or endpoint layer.",
    "topic": "Cloud Infrastructure Assessment"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "A red team exercise confirms that a vulnerability reported by the scanner is exploitable, allowing remote code execution. How does this change the vulnerability's priority?",
    "options": [
      "A. It remains the same priority because CVSS already accounts for exploitability",
      "B. It increases priority because validated exploitable vulnerabilities pose confirmed risk",
      "C. It decreases priority because the red team already exploited it",
      "D. It should be accepted as risk because the red team is internal"
    ],
    "correct": "B",
    "explanation": "Validation (confirming a vulnerability is actually exploitable) elevates priority significantly. A theoretical vulnerability might be mitigated by other controls; a validated exploit proves a real attack path exists. Metasploit auxiliary modules are commonly used for this validation.",
    "topic": "Vulnerability Validation \u2014 Exploitation"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 1] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 2] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 3] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 4] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 5] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 6] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 7] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 8] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 9] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 10] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 11] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 12] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 13] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 14] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 15] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 16] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 17] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 18] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 19] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 20] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 21] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 22] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 23] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 24] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 25] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 26] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 27] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 28] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 29] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 30] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 31] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 32] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 33] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "2.0 Vulnerability Management",
    "scenario": "[Scenario 34] A vulnerability scan reports a critical CVE on an internal test server with no sensitive data and no network path from the internet. The same CVE exists on the public-facing VPN gateway. Which system should be patched FIRST?",
    "options": [
      "A. The test server because the CVE is critical",
      "B. The VPN gateway because it is internet-facing and a higher-value target",
      "C. Neither \u2014 both can wait until the next maintenance window",
      "D. Patch both simultaneously"
    ],
    "correct": "B",
    "explanation": "Context-aware prioritization considers exposure and asset value, not just CVSS. An internet-facing VPN gateway is under constant attack and provides access to the internal network. A test server with no sensitive data and no external exposure poses lower real risk even with a higher CVSS score.",
    "topic": "Risk-Based Prioritization"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "A SOC analyst detects active ransomware encryption on a workstation. The malware is spreading via SMB to file shares. What is the CORRECT FIRST action?",
    "options": [
      "A. Begin eradicating the malware by running antivirus scans",
      "B. Contain the threat by isolating the affected workstation and blocking SMB at the firewall",
      "C. Start recovering files from backups immediately",
      "D. Preserve evidence by leaving everything running untouched"
    ],
    "correct": "B",
    "explanation": "The IR lifecycle order is critical: Containment comes before Eradication and Recovery. The FIRST action is to stop the spread (isolate host, block lateral movement vectors). Eradicating before containing risks the malware spreading further while you clean one system.",
    "topic": "IR Lifecycle \u2014 Containment First"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "During incident response, an analyst needs to collect volatile evidence from a compromised Linux server. Which evidence should be collected FIRST?",
    "options": [
      "A. Disk image of the root filesystem",
      "B. Running processes and network connections in memory",
      "C. Archived logs from last month",
      "D. Physical server photographs"
    ],
    "correct": "B",
    "explanation": "Order of volatility (RFC 3227) requires collecting most-volatile evidence first: CPU registers/cache \u2192 RAM \u2192 network state \u2192 disk \u2192 logs \u2192 backups. Memory contains running processes, network connections, and fileless malware that vanishes when power is lost.",
    "topic": "Evidence Handling \u2014 Order of Volatility"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "An incident response team has contained a malware outbreak. Before rebuilding affected systems, they must ensure the root cause is addressed. Which action is MOST critical?",
    "options": [
      "A. Reimage all workstations immediately",
      "B. Patch the vulnerability that allowed initial access and remove all persistence mechanisms",
      "C. Delete all user accounts to prevent reinfection",
      "D. Format the network switches"
    ],
    "correct": "B",
    "explanation": "Eradication must remove the root cause (exploited vulnerability) and all persistence (backdoors, scheduled tasks, rogue accounts) before recovery. Rebuilding without patching the entry point invites immediate reinfection. Recovery without eradication is incomplete.",
    "topic": "Eradication vs Recovery"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "A company experiences a data breach. Legal counsel instructs the IT team to preserve all relevant logs and emails. What is this instruction called?",
    "options": [
      "A. Chain of custody",
      "B. Legal hold",
      "C. Evidence tampering",
      "D. Incident declaration"
    ],
    "correct": "B",
    "explanation": "A legal hold is a duty to preserve relevant data once litigation or a formal investigation is anticipated. It overrides standard retention and deletion policies. Chain of custody documents who handled evidence, but legal hold is the preservation directive itself.",
    "topic": "Legal Hold"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "During a tabletop exercise, the blue team discusses how to respond to a phishing campaign that compromises executive credentials. What IR phase does this activity belong to?",
    "options": [
      "A. Detection and Analysis",
      "B. Preparation",
      "C. Containment",
      "D. Post-Incident Activity"
    ],
    "correct": "B",
    "explanation": "Tabletop exercises, simulation drills, playbook development, and training are all Preparation-phase activities. They occur before any incident happens. The NIST SP 800-61 Preparation phase includes planning, policy creation, and exercising response procedures.",
    "topic": "IR Preparation \u2014 Tabletop Exercises"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "An analyst discovers that an attacker created a new local administrator account on three servers. The incident is now contained. What is the NEXT step in the IR lifecycle?",
    "options": [
      "A. Recovery \u2014 restore services to production",
      "B. Eradication \u2014 remove the rogue accounts, malware, and patch the entry point",
      "C. Lessons learned \u2014 document what happened",
      "D. Detection \u2014 confirm the scope of compromise"
    ],
    "correct": "B",
    "explanation": "After containment, the next phase is eradication: removing all attacker artifacts (rogue accounts, malware, persistence) and closing the entry point (patching the exploited vulnerability). Only after confirmed eradication should recovery begin.",
    "topic": "IR Phase Order"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "An organization uses the Diamond Model of Intrusion Analysis during an incident. The analyst knows the adversary's infrastructure (IP ranges, domains) and the victim (their organization). Which vertex is MISSING to complete the model?",
    "options": [
      "A. TTPs",
      "B. Capability",
      "C. Intent",
      "D. Timeline"
    ],
    "correct": "B",
    "explanation": "The Diamond Model has four vertices: Adversary (who), Capability (how/tools), Infrastructure (where), and Victim (whom). Knowing infrastructure and victim means Adversary and Capability are the missing pieces. Capability describes the tools and techniques used.",
    "topic": "Diamond Model"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "A SOC detects beaconing behavior from a compromised host. The analyst maps this to the Cyber Kill Chain. Which phase does C2 beaconing represent?",
    "options": [
      "A. Delivery",
      "B. Installation",
      "C. Command and Control",
      "D. Actions on Objectives"
    ],
    "correct": "C",
    "explanation": "The Cyber Kill Chain phases in order are: Reconnaissance \u2192 Weaponization \u2192 Delivery \u2192 Exploitation \u2192 Installation \u2192 Command and Control \u2192 Actions on Objectives. C2 beaconing is the sixth phase, where the compromised host communicates back to attacker infrastructure.",
    "topic": "Cyber Kill Chain"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "During an active incident, the IR team must decide whether to isolate a compromised database server immediately or monitor it quietly for 24 hours to observe attacker behavior. What factor should guide this decision?",
    "options": [
      "A. Always monitor first to gather maximum intelligence",
      "B. Isolate immediately if the server contains critical data or the attack is spreading",
      "C. Never isolate \u2014 it destroys evidence",
      "D. Always monitor for at least 48 hours"
    ],
    "correct": "B",
    "explanation": "Containment strategy balances evidence preservation against stopping damage. If the compromise is spreading or involves critical data, immediate isolation is warranted. Monitoring is appropriate for contained, slow-moving incidents where intelligence value exceeds risk.",
    "topic": "Containment Strategy"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "An incident responder creates a bit-for-bit copy of a compromised laptop's SSD, calculates SHA-256 hashes before and after imaging, and documents every person who handles the drive. Which three concepts are demonstrated?",
    "options": [
      "A. Encryption, decryption, and key management",
      "B. Forensic imaging, integrity validation, and chain of custody",
      "C. Backup, restore, and disaster recovery",
      "D. Scanning, patching, and validation"
    ],
    "correct": "B",
    "explanation": "Forensic imaging creates exact copies. Hashing (SHA-256) before and after proves integrity \u2014 if the hash changes, evidence was modified. Chain of custody documents who handled evidence, when, and where. These three practices ensure evidence is admissible and trustworthy.",
    "topic": "Evidence Handling"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "After a ransomware incident, the CEO asks the security team: 'How did they get in, and how do we stop it from happening again?' What type of analysis answers this?",
    "options": [
      "A. Threat intelligence analysis",
      "B. Root cause analysis (RCA)",
      "C. Vulnerability scanning",
      "D. Penetration testing"
    ],
    "correct": "B",
    "explanation": "Root cause analysis (RCA) identifies the fundamental reason an incident occurred (e.g., unpatched VPN, weak credentials, missing MFA) and drives corrective actions. It answers 'why' and 'how to prevent,' not just 'what happened.'",
    "topic": "Root Cause Analysis"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "An organization is preparing its incident response plan. Which element is MOST critical to define BEFORE an incident occurs?",
    "options": [
      "A. The exact malware family that will attack",
      "B. Roles and responsibilities, escalation paths, and communication protocols",
      "C. The specific IP addresses of future attackers",
      "D. The final recovery date"
    ],
    "correct": "B",
    "explanation": "Preparation phase requires defining who does what, when to escalate, and how to communicate. You cannot predict specific attackers or malware, but you can define the organizational structure and decision-making authority that will guide response regardless of the threat.",
    "topic": "IR Planning"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 1] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 2] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 3] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 4] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 5] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 6] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 7] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 8] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 9] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 10] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 11] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 12] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 13] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 14] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 15] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 16] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 17] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 18] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 19] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 20] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 21] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 22] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 23] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 24] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 25] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 26] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 27] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 28] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 29] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 30] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 31] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 32] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 33] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "3.0 Incident Response and Management",
    "scenario": "[Scenario 34] A compromised host is isolated to a quarantine VLAN during an incident. The EDR shows the attacker used PowerShell to create a scheduled task and a new local admin account. What IR phase addresses removing these artifacts?",
    "options": [
      "A. Containment",
      "B. Eradication",
      "C. Recovery",
      "D. Detection"
    ],
    "correct": "B",
    "explanation": "Eradication removes all attacker presence: malware, persistence mechanisms (scheduled tasks, rogue accounts), and closes the entry point. Containment stops spread. Recovery restores operations. These are distinct phases with distinct purposes.",
    "topic": "IR Lifecycle \u2014 Eradication"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "A vulnerability management report shows that critical vulnerabilities increased 15% this quarter. The CISO needs to present this to the board. How should the finding be framed?",
    "options": [
      "A. 'We have 47 critical CVEs, here are the CVSS scores'",
      "B. 'Expanded scan coverage revealed previously hidden risk; here is the remediation trend and business impact'",
      "C. 'The security team needs more staff immediately'",
      "D. 'All systems are at risk of immediate compromise'"
    ],
    "correct": "B",
    "explanation": "Executive communication must translate technical findings into business risk language. Rising vulnerability counts may reflect improved visibility (expanded scanning), not worsening security. Frame with context, trends, and business impact rather than raw technical metrics.",
    "topic": "Executive Communication"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "An incident response team completes a major breach investigation. Which document captures what happened, what worked, what didn't, and specific action items for improvement?",
    "options": [
      "A. Incident declaration form",
      "B. After-action report / Lessons learned",
      "C. Chain of custody log",
      "D. Vulnerability scan report"
    ],
    "correct": "B",
    "explanation": "The after-action report (lessons learned) is a post-incident deliverable that documents the incident timeline, response effectiveness, gaps, and corrective actions. It feeds back into the Preparation phase by updating playbooks, detection rules, and training.",
    "topic": "Post-Incident Reporting"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "A SOC tracks Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR). Over six months, MTTD improved from 4 hours to 15 minutes, but MTTR worsened from 30 minutes to 2 hours. What does this indicate?",
    "options": [
      "A. Detection is faster but response workflows need optimization",
      "B. Both detection and response are improving",
      "C. The SOC should stop measuring MTTR",
      "D. Detection tools are generating false positives"
    ],
    "correct": "A",
    "explanation": "MTTD measures detection speed; MTTR measures response speed. Improving MTTD with worsening MTTR suggests alerts are being found faster, but containment, eradication, or escalation processes are inefficient. The focus should shift to response workflow optimization.",
    "topic": "Security Metrics \u2014 MTTD/MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "During an active ransomware incident, the PR team wants to issue a public statement. The incident commander should FIRST ensure:",
    "options": [
      "A. The statement includes full technical details of the attack",
      "B. Legal, executive leadership, and law enforcement (if involved) have reviewed and approved the message",
      "C. The statement is posted on social media immediately",
      "D. All employees are notified before the public"
    ],
    "correct": "B",
    "explanation": "Incident communications require coordination across legal, executive, and potentially law enforcement stakeholders. Unauthorized statements can create liability, tip off attackers, or violate regulatory notification requirements. One spokesperson and pre-approved messaging are standard practice.",
    "topic": "Incident Communication"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "A vulnerability report identifies a critical flaw in a legacy payment system that cannot be patched due to vendor end-of-life. The system processes $2M in transactions daily. What should the report recommend?",
    "options": [
      "A. Ignore the finding because patching is impossible",
      "B. Document a formal risk exception with compensating controls and present a business case for system replacement",
      "C. Shut down the payment system immediately",
      "D. Patch it anyway and hope for the best"
    ],
    "correct": "B",
    "explanation": "When remediation is impossible, the correct path is a documented risk exception with compensating controls (WAF, segmentation, monitoring) and a business case for replacement. Ignoring creates unaddressed risk; shutting down may not be viable; unauthorized patching may break the system.",
    "topic": "Remediation Barriers"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "A SOC dashboard shows alert volume increased 300% after a new detection rule was deployed. The false-positive rate also increased significantly. What is the MOST appropriate action?",
    "options": [
      "A. Disable the new rule entirely",
      "B. Tune the rule \u2014 adjust thresholds, add whitelists, and refine conditions",
      "C. Hire more analysts to handle the volume",
      "D. Reduce the SIEM data retention period"
    ],
    "correct": "B",
    "explanation": "Alert tuning is the correct response to excessive false positives. This includes raising thresholds, whitelisting known-good sources, narrowing conditions, or adding suppression logic. Disabling the rule removes detection capability. Hiring analysts is a costly workaround for a fixable technical problem.",
    "topic": "Alert Tuning and Metrics"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "An organization must report a data breach to regulators. GDPR requires notification within 72 hours of becoming aware. Who typically OWNS the decision of when to notify?",
    "options": [
      "A. The SOC analyst who detected the breach",
      "B. Legal counsel and executive leadership",
      "C. The IT help desk",
      "D. The external penetration testing vendor"
    ],
    "correct": "B",
    "explanation": "While analysts detect and escalate, the decision to notify regulators, customers, or law enforcement belongs to legal counsel and executive leadership. Analysts provide facts and timelines; legal evaluates regulatory obligations and liability. This separation is critical.",
    "topic": "Regulatory Reporting"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "A post-incident review reveals that the IR team spent 3 hours debating containment strategy while malware spread to 12 additional hosts. What improvement is MOST needed?",
    "options": [
      "A. Better antivirus software",
      "B. Pre-defined playbooks with clear escalation criteria and decision authority",
      "C. More network segmentation",
      "D. Faster internet bandwidth"
    ],
    "correct": "B",
    "explanation": "Delays in decision-making during incidents often stem from unclear authority and lack of pre-planned playbooks. Playbooks should define containment triggers, decision-makers, and approved actions in advance so teams act instead of debate. Technical controls help, but process clarity is the root fix.",
    "topic": "Playbook Development"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "A security metrics report shows the phishing campaign click rate decreased from 18% to 4% after security awareness training. How should this be communicated to leadership?",
    "options": [
      "A. 'We sent 500 phishing emails and 20 people clicked'",
      "B. 'Security awareness training reduced phishing susceptibility by 78%, demonstrating ROI on the training investment'",
      "C. 'The remaining 4% should be fired'",
      "D. 'Phishing is no longer a threat to our organization'"
    ],
    "correct": "B",
    "explanation": "Business-focused metrics frame security outcomes in terms leadership understands: risk reduction, ROI, and trend improvement. 'Reduced susceptibility by 78%' is more impactful than raw numbers. Avoid absolute statements ('no longer a threat') and punitive framing.",
    "topic": "Security Awareness Metrics"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "An incident report for technical staff should include which elements? (Select the BEST combination)",
    "options": [
      "A. Executive summary, stock price impact, and marketing implications",
      "B. Timeline, affected systems, IOCs, evidence, root cause, and remediation steps",
      "C. Only the malware family name and CVSS scores",
      "D. Employee disciplinary actions and HR recommendations"
    ],
    "correct": "B",
    "explanation": "Technical incident reports serve operational audiences: they need timelines, scope, IOCs, evidence, root cause, and actionable remediation steps. Executive summaries serve leadership. HR actions are separate. Malware names alone are insufficient.",
    "topic": "Incident Report Structure"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "A vulnerability management SLA states critical vulnerabilities must be remediated within 7 days. The scan shows 3 criticals on a development server that are 10 days old. What does this indicate?",
    "options": [
      "A. The SLA is being violated and requires escalation",
      "B. Development servers are exempt from all SLAs",
      "C. The scanner is misconfigured",
      "D. Critical vulnerabilities on dev servers are always false positives"
    ],
    "correct": "A",
    "explanation": "SLAs define contractual or internal performance targets. Missing a 7-day remediation window for critical vulnerabilities is an SLA violation requiring escalation, resource allocation, or exception documentation. Development environments are not automatically exempt \u2014 they often contain code and credentials.",
    "topic": "SLA/SLO Management"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "During a breach, the incident commander establishes a secure out-of-band communication channel using phone calls because corporate email may be compromised. Which IR principle does this demonstrate?",
    "options": [
      "A. Defense in depth",
      "B. Operational security in incident communications",
      "C. Least privilege",
      "D. Separation of duties"
    ],
    "correct": "B",
    "explanation": "Operational security during incidents assumes attacker compromise of standard channels. Out-of-band communication (phone, secure chat, in-person) ensures coordination confidentiality even if email or Slack is compromised. This is explicitly part of incident communication planning.",
    "topic": "Operational Security \u2014 Communications"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 1] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 2] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 3] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 4] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 5] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 6] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 7] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 8] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 9] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 10] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 11] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 12] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 13] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 14] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 15] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 16] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 17] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  },
  {
    "domain": "4.0 Reporting and Communication",
    "scenario": "[Scenario 18] A quarterly vulnerability report shows mean time to remediate (MTTR) for critical findings improved from 14 days to 5 days. What does this metric BEST demonstrate?",
    "options": [
      "A. The organization has fewer vulnerabilities",
      "B. The vulnerability management program is becoming more efficient",
      "C. The scanner is finding less critical issues",
      "D. The IT team is working overtime"
    ],
    "correct": "B",
    "explanation": "MTTR measures the average time from detection to remediation. A decreasing MTTR indicates improved process efficiency, better prioritization, or increased patching capacity. It does not necessarily mean fewer vulnerabilities exist \u2014 it means they are being fixed faster.",
    "topic": "Metrics \u2014 MTTR"
  }
];

const pbqBank = [
  {
    "id": "pbq1",
    "domain": "1.0 Security Operations",
    "type": "log-analysis",
    "title": "PBQ 1: SIEM Log Analysis",
    "scenario": "You are reviewing Splunk logs during a suspected phishing incident. Analyze the following authentication events and identify the attack pattern.",
    "data": "Time                | EventCode | Account      | Source_IP     | LogonType | Status\n2026-08-15 02:14:33 | 4625      | jdoe         | 203.0.113.45  | 3         | 0xC000006A\n2026-08-15 02:14:35 | 4625      | jdoe         | 203.0.113.45  | 3         | 0xC000006A\n2026-08-15 02:14:37 | 4625      | jdoe         | 203.0.113.45  | 3         | 0xC000006A\n2026-08-15 02:14:39 | 4625      | admin        | 203.0.113.45  | 3         | 0xC000006A\n2026-08-15 02:14:41 | 4625      | admin        | 203.0.113.45  | 3         | 0xC000006A\n2026-08-15 02:14:43 | 4625      | bsmith       | 203.0.113.45  | 3         | 0xC000006A\n2026-08-15 02:14:45 | 4625      | bsmith       | 203.0.113.45  | 3         | 0xC000006A\n2026-08-15 02:14:47 | 4625      | jdoe         | 203.0.113.45  | 3         | 0xC000006A\n2026-08-15 02:15:02 | 4624      | bsmith       | 203.0.113.45  | 3         | 0xC0000064",
    "question": "Based on the log entries above, what attack is occurring and which account was successfully compromised?",
    "options": [
      "A. Brute force attack; jdoe was compromised",
      "B. Password spraying attack; bsmith was compromised",
      "C. Credential stuffing attack; admin was compromised",
      "D. Pass-the-hash attack; bsmith was compromised"
    ],
    "correct": "B",
    "explanation": "Password spraying uses a few common passwords against many accounts to avoid lockout. The logs show one or two failed attempts per account (jdoe, admin, bsmith) from the same IP, followed by a successful login for bsmith (Event ID 4624). Brute force would show many attempts against one account. Credential stuffing uses breached credentials from external sources.",
    "topic": "Log Analysis \u2014 Password Spraying Detection"
  },
  {
    "id": "pbq2",
    "domain": "1.0 Security Operations",
    "type": "packet-analysis",
    "title": "PBQ 2: Packet Capture Analysis",
    "scenario": "You are analyzing a tcpdump capture from a suspected compromised host. Review the output below.",
    "data": "14:32:10.123456 IP 192.168.1.50.49152 > 185.220.101.44.443: Flags [S], seq 1234567890, win 64240\n14:32:10.234567 IP 185.220.101.44.443 > 192.168.1.50.49152: Flags [S.], seq 9876543210, ack 1234567891, win 65535\n14:32:10.234568 IP 192.168.1.50.49152 > 185.220.101.44.443: Flags [.], ack 1, win 64240\n14:33:10.345678 IP 192.168.1.50.49153 > 185.220.101.44.443: Flags [S], seq 2345678901, win 64240\n14:33:10.456789 IP 185.220.101.44.443 > 192.168.1.50.49153: Flags [S.], seq 8765432109, ack 2345678902, win 65535\n14:33:10.456790 IP 192.168.1.50.49153 > 185.220.101.44.443: Flags [.], ack 1, win 64240\n14:34:10.567890 IP 192.168.1.50.49154 > 185.220.101.44.443: Flags [S], seq 3456789012, win 64240\n14:34:10.678901 IP 185.220.101.44.443 > 192.168.1.50.49154: Flags [S.], seq 7654321098, ack 3456789013, win 65535",
    "question": "What pattern is demonstrated in this capture, and what is the MOST likely purpose of the traffic?",
    "options": [
      "A. Random scanning; the host is looking for open web servers",
      "B. C2 beaconing; the host is communicating with command and control at fixed intervals",
      "C. Data exfiltration; large files are being uploaded to the external IP",
      "D. Normal HTTPS browsing; a user is visiting a website"
    ],
    "correct": "B",
    "explanation": "The capture shows TCP SYN connections from the same internal host to the same external IP on port 443, occurring at exactly 60-second intervals (14:32, 14:33, 14:34). The source ports increment (49152, 49153, 49154), indicating new connections each time. This mechanical regularity with tiny byte counts is the classic signature of C2 beaconing.",
    "topic": "Packet Analysis \u2014 C2 Beaconing"
  },
  {
    "id": "pbq3",
    "domain": "2.0 Vulnerability Management",
    "type": "prioritization",
    "title": "PBQ 3: Vulnerability Prioritization",
    "scenario": "You are the vulnerability analyst responsible for prioritizing this week's scan findings. You can only patch 2 systems before the weekend maintenance window closes. Review the findings:",
    "data": "Finding A: Internet-facing web server, CVSS 9.8, CVE-2024-XXXX, no known exploit in wild, handles public marketing content\nFinding B: Internal domain controller, CVSS 7.5, listed in CISA KEV, handles all authentication for 5,000 users\nFinding C: Internal file server, CVSS 6.3, public PoC available on GitHub, contains HR employee records\nFinding D: Developer workstation, CVSS 8.1, no exploit available, no sensitive data stored",
    "question": "Which TWO findings should be remediated FIRST based on risk-based prioritization?",
    "options": [
      "A. Findings A and D (highest CVSS scores)",
      "B. Findings B and C (active threat context and sensitive data)",
      "C. Findings A and B (internet-facing + domain controller)",
      "D. Findings C and D (internal systems with known issues)"
    ],
    "correct": "B",
    "explanation": "Risk-based prioritization weighs exploitability, active exploitation, asset value, and data sensitivity over raw CVSS. Finding B is in CISA KEV (actively exploited) on a critical domain controller. Finding C has a public PoC and contains sensitive HR data. Finding A has high CVSS but no known exploit and only hosts public marketing content. Finding D is a dev workstation with no sensitive data.",
    "topic": "Vulnerability Prioritization \u2014 Risk Context"
  },
  {
    "id": "pbq4",
    "domain": "2.0 Vulnerability Management",
    "type": "snort-rule",
    "title": "PBQ 4: IDS Rule Analysis",
    "scenario": "Your team needs to detect when an attacker attempts to access /etc/passwd via a web request. You are given the following Snort rule snippet to review:",
    "data": "alert tcp $EXTERNAL_NET any -> $HOME_NET 80 (msg:\"WEB ATTACK passwd access\"; content:\"/etc/passwd\"; sid:1000001; rev:1;)",
    "question": "What is the PRIMARY limitation of this rule that would cause it to miss many real attacks?",
    "options": [
      "A. The rule uses 'alert' instead of 'drop'",
      "B. The rule does not account for URL encoding (e.g., %2fetc%2fpasswd)",
      "C. The sid value is too low",
      "D. The rule should use port 443 instead of 80"
    ],
    "correct": "B",
    "explanation": "Attackers routinely use URL encoding (%2f instead of /) to evade simple string-matching IDS rules. A rule looking for literal '/etc/passwd' will miss encoded variants like '%2fetc%2fpasswd' or '/etc/passwd%00'. Effective rules must normalize or account for encoding. The action (alert vs drop) and port choice are deployment decisions, not detection limitations.",
    "topic": "IDS Rules \u2014 Evasion Techniques"
  },
  {
    "id": "pbq5",
    "domain": "3.0 Incident Response and Management",
    "type": "ir-sequence",
    "title": "PBQ 5: Incident Response Lifecycle",
    "scenario": "A ransomware attack has been detected on the corporate network. The malware is actively encrypting file shares. Place the following IR actions in the CORRECT order.",
    "data": "Actions:\n1. Restore file shares from clean backups\n2. Isolate infected workstations from the network\n3. Identify patient zero and how the malware entered\n4. Remove ransomware binaries and patch the entry point\n5. Document lessons learned and update playbooks",
    "question": "What is the correct sequence of these IR phases?",
    "options": [
      "A. 3 \u2192 2 \u2192 4 \u2192 1 \u2192 5",
      "B. 2 \u2192 3 \u2192 4 \u2192 1 \u2192 5",
      "C. 3 \u2192 2 \u2192 1 \u2192 4 \u2192 5",
      "D. 2 \u2192 4 \u2192 1 \u2192 3 \u2192 5"
    ],
    "correct": "B",
    "explanation": "The correct NIST IR sequence is: Containment (isolate infected hosts) \u2192 Detection/Analysis (identify patient zero and entry point) \u2192 Eradication (remove malware and patch) \u2192 Recovery (restore from backups) \u2192 Post-Incident (lessons learned). You must contain FIRST to stop spread, then analyze, then eradicate, then recover.",
    "topic": "IR Lifecycle \u2014 Phase Ordering"
  },
  {
    "id": "pbq6",
    "domain": "3.0 Incident Response and Management",
    "type": "mitre-mapping",
    "title": "PBQ 6: MITRE ATT&CK Mapping",
    "scenario": "During an incident investigation, you observe the following attacker behaviors. Map them to the correct MITRE ATT&CK tactic.",
    "data": "Behavior 1: Attacker sends spear-phishing email with malicious Excel macro\nBehavior 2: Macro executes PowerShell to download payload from attacker server\nBehavior 3: Payload creates a scheduled task to survive reboots\nBehavior 4: Attacker uses Mimikatz to extract credentials from LSASS memory\nBehavior 5: Attacker moves laterally via PsExec to domain controller",
    "question": "Which behavior maps to the 'Persistence' tactic?",
    "options": [
      "A. Behavior 1",
      "B. Behavior 2",
      "C. Behavior 3",
      "D. Behavior 4"
    ],
    "correct": "C",
    "explanation": "Behavior 3 (creating a scheduled task to survive reboots) is Persistence \u2014 techniques that maintain access across restarts. Behavior 1 is Initial Access (spear-phishing). Behavior 2 is Execution (PowerShell). Behavior 4 is Credential Access (Mimikatz/LSASS). Behavior 5 is Lateral Movement (PsExec).",
    "topic": "MITRE ATT&CK \u2014 Tactic Mapping"
  },
  {
    "id": "pbq7",
    "domain": "3.0 Incident Response and Management",
    "type": "evidence-handling",
    "title": "PBQ 7: Evidence Collection Order",
    "scenario": "You are responding to a confirmed breach of a Windows server. The attacker used fileless malware. You need to collect evidence before the server is powered down for imaging. Which collection order is CORRECT?",
    "data": "Evidence types:\nA. RAM dump\nB. Disk forensic image\nC. Running network connections\nD. External SIEM logs\nE. Screenshots of active desktop",
    "question": "Which order follows the correct order of volatility?",
    "options": [
      "A. A \u2192 C \u2192 E \u2192 B \u2192 D",
      "B. C \u2192 A \u2192 E \u2192 B \u2192 D",
      "C. E \u2192 C \u2192 A \u2192 B \u2192 D",
      "D. D \u2192 B \u2192 A \u2192 C \u2192 E"
    ],
    "correct": "C",
    "explanation": "Order of volatility (most to least): CPU registers/cache \u2192 RAM (A) \u2192 network state (C) \u2192 running processes/screenshots (E) \u2192 disk (B) \u2192 remote logs (D). Screenshots of the active desktop capture volatile UI state. RAM must be captured before power is lost. Network connections vanish when interfaces go down. Disk and remote logs are the most persistent.",
    "topic": "Evidence Handling \u2014 Order of Volatility"
  },
  {
    "id": "pbq8",
    "domain": "1.0 Security Operations",
    "type": "email-analysis",
    "title": "PBQ 8: Email Header Analysis",
    "scenario": "You are investigating a suspected Business Email Compromise. Analyze the email header below.",
    "data": "Return-Path: <ceo@secure-payment-portal.xyz>\nFrom: \"CEO John Smith\" <ceo@company-ceo.com>\nTo: <accounting@company.com>\nSubject: URGENT: Wire Transfer Needed Today\nReceived: from mail.secure-payment-portal.xyz ([203.0.113.88])\n    by mail.company.com with ESMTPS id 4X5Y6Z\nDKIM-Signature: v=1; a=rsa-sha256; d=secure-payment-portal.xyz; ...\nAuthentication-Results: spf=pass smtp.mailfrom=secure-payment-portal.xyz;\n    dkim=pass header.d=secure-payment-portal.xyz;\n    dmarc=none header.from=company-ceo.com",
    "question": "What is the PRIMARY indicator that this email is a BEC attack?",
    "options": [
      "A. The DKIM signature is invalid",
      "B. The Return-Path domain does not match the Display From domain, and DMARC is not aligned",
      "C. The email was sent using ESMTPS encryption",
      "D. The subject line contains the word 'URGENT'"
    ],
    "correct": "B",
    "explanation": "The Display From shows 'company-ceo.com' (legitimate-looking) but the Return-Path and DKIM domain are 'secure-payment-portal.xyz' (attacker-controlled). DMARC alignment fails because the domains don't match. This is display-name spoofing \u2014 the attacker hopes the victim sees 'CEO John Smith' and doesn't check the actual sending domain. SPF and DKIM pass for the attacker's domain, not the spoofed one.",
    "topic": "Email Analysis \u2014 BEC Detection"
  },
  {
    "id": "pbq9",
    "domain": "2.0 Vulnerability Management",
    "type": "cloud-config",
    "title": "PBQ 9: Cloud Misconfiguration",
    "scenario": "A ScoutSuite audit of an AWS environment reveals the following IAM policy attached to an EC2 instance role. Identify the critical misconfiguration.",
    "data": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"*\",\n      \"Resource\": \"*\"\n    }\n  ]\n}",
    "question": "What is the SEVERITY and IMPACT of this misconfiguration?",
    "options": [
      "A. Low; the EC2 instance can only read S3 buckets",
      "B. Critical; any compromise of this EC2 grants full account access",
      "C. Medium; this is the default AWS policy and should be changed",
      "D. Informational; IAM policies cannot be exploited by attackers"
    ],
    "correct": "B",
    "explanation": "The policy allows ALL actions ('Action': '*') on ALL resources ('Resource': '*'). This is wildcard over-permissioning. If an attacker compromises this EC2 instance (e.g., via SSRF or RCE), they inherit these credentials and gain full control of the AWS account. This is a critical finding requiring immediate remediation.",
    "topic": "Cloud Security \u2014 IAM Misconfiguration"
  },
  {
    "id": "pbq10",
    "domain": "4.0 Reporting and Communication",
    "type": "metrics-calculation",
    "title": "PBQ 10: SOC Metrics Analysis",
    "scenario": "You are preparing a monthly SOC performance report. Given the data below, calculate the key metric requested.",
    "data": "Monthly SOC Metrics:\n- Total alerts generated: 12,000\n- True positives confirmed: 180\n- False positives: 10,800\n- Mean Time to Detect (MTTD): 18 minutes\n- Mean Time to Respond (MTTR): 45 minutes\n- Critical alerts triaged within SLA: 85 out of 100",
    "question": "What is the FALSE POSITIVE RATE, and what does it indicate about detection quality?",
    "options": [
      "A. 1.5%; detection quality is excellent",
      "B. 90%; detection rules need significant tuning",
      "C. 15%; the SOC is understaffed",
      "D. 60%; analysts are missing real threats"
    ],
    "correct": "B",
    "explanation": "False Positive Rate = False Positives / Total Alerts = 10,800 / 12,000 = 90%. This is extremely high and indicates detection rules are generating massive noise. The SOC is likely suffering alert fatigue. The correct response is rule tuning: adjusting thresholds, adding whitelists, and refining conditions. A healthy false positive rate is typically under 20-30%.",
    "topic": "SOC Metrics \u2014 False Positive Rate"
  }
];

// Shuffle utility
function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Prepare exam set: shuffle MCQs, keep PBQs at end
function getExamSet() {
    const shuffledMCQs = shuffleArray(mcqBank);
    return [...shuffledMCQs, ...pbqBank];
}

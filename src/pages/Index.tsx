
import { useState } from "react";
import Terminal from "../components/Terminal";
import BlogList from "../components/BlogList";
import BlogPost from "../components/BlogPost";

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
}

const SAMPLE_POSTS: Post[] = [
  {
    id: "001",
    title: "Breaking the Firewall: Modern Security Techniques",
    date: "2023-11-30",
    excerpt: "An exploration of modern security techniques and how to bypass them.",
    content: `In the ever-evolving landscape of cybersecurity, firewalls remain our first line of defense. But as attackers grow more sophisticated, so too must our understanding of these defenses.

This post explores the latest in firewall technology and the techniques being used to bypass them in 2023. We'll dive into:

1. Next-generation firewalls and their weaknesses
2. Zero-day exploits that bypassed major security systems
3. How packet manipulation techniques are evolving
4. The role of AI in both attacks and defense
5. Practical hardening techniques for your systems

Remember: Understanding vulnerabilities is essential to defense, but always conduct your research in controlled, legal environments.

// CODE SNIPPET:
// Example of a simple port scanning detection evasion
for (let port = 1; port <= 1024; port += getRandom(5, 20)) {
  // Random delays between scans to avoid pattern detection
  await sleep(getRandom(100, 3000));
  const result = await probeTCP(targetIP, port);
  if (result.open) {
    console.log(\`Port \${port} is open and running \${result.service}\`);
  }
}

The key takeaway? Security is never static. The systems we build today must anticipate the attacks of tomorrow.`,
    author: "0xShadowCat"
  },
  {
    id: "002",
    title: "The Art of Social Engineering",
    date: "2023-12-15",
    excerpt: "How psychological manipulation remains the biggest security vulnerability.",
    content: `While we focus on technical exploits and code vulnerabilities, the most effective hacking technique remains decidedly low-tech: social engineering.

This post examines why humans continue to be the weakest link in security systems, and how attackers exploit psychological principles to compromise even the most hardened systems.

Key topics include:

1. The psychology behind successful phishing campaigns
2. How attackers establish false trust relationships
3. Pretexting techniques used by professional penetration testers
4. Defense strategies for organizations of all sizes
5. Real-world case studies of successful social engineering attacks

One particularly interesting case from 2023 involved attackers who created an entire fake company, complete with LinkedIn profiles, website, and even fake client testimonials. They spent months building relationships with employees at a target financial institution before executing their attack.

Consider this quote from security researcher Rachel Tobac: "Why spend weeks trying to hack through a firewall when you can make one phone call and have someone give you the keys to the kingdom?"

The most important defense? Creating a culture of security awareness where verification becomes standard practice, and employees feel empowered to question unusual requests without fear of reprimand.`,
    author: "PhantomByte"
  },
  {
    id: "003",
    title: "Quantum Computing: The End of Encryption As We Know It?",
    date: "2024-01-10",
    excerpt: "Exploring how quantum computing will transform cybersecurity.",
    content: `As quantum computing moves from theoretical to practical, we're approaching a cryptographic breaking point. This post explores the implications of quantum computing on our current security infrastructure.

Topics covered:

1. How Shor's algorithm threatens RSA and ECC encryption
2. The timeline for quantum supremacy in cryptography
3. Post-quantum cryptography alternatives
4. The NIST standardization process and leading candidates
5. How organizations should prepare today for the quantum future

Current estimates suggest that a quantum computer capable of breaking 2048-bit RSA encryption would need approximately 20 million qubits. Current systems have reached only a few hundred qubits, but the pace of advancement is accelerating.

// CODE SNIPPET:
// Example of a basic lattice-based encryption scheme (simplified)
function generateLatticeKeys() {
  const n = 1024; // dimension
  const q = 12289; // modulus
  const sigma = 3.0; // standard deviation
  
  // Generate a random matrix A
  const A = new Matrix(n, n).randomize(q);
  
  // Generate a small secret vector s with elements following
  // a discrete Gaussian distribution
  const s = new Vector(n).gaussianRandom(sigma);
  
  // Generate a small error vector e
  const e = new Vector(n).gaussianRandom(sigma);
  
  // Compute public key b = As + e (mod q)
  const b = A.multiply(s).add(e).mod(q);
  
  return {
    publicKey: { A, b },
    privateKey: { s }
  };
}

The most important action organizations can take now is to implement crypto-agility - designing systems that can quickly swap encryption algorithms when needed. The quantum future is coming; security-conscious organizations must prepare today.`,
    author: "QuantumShadow"
  },
  {
    id: "004",
    title: "The Hidden Code: Steganography in the Digital Age",
    date: "2024-02-05",
    excerpt: "How data can be hidden in plain sight.",
    content: `While encryption scrambles data to make it unreadable, steganography hides the very existence of the data. This ancient practice has found new life in the digital world.

This post explores modern steganographic techniques and their applications in both security and privacy:

1. Image steganography techniques beyond the least significant bit
2. Using audio files as data carriers
3. Network steganography and covert channels
4. Steganalysis: Detecting hidden messages
5. Practical tools for secure communication

One fascinating example involves hiding data in social media images. By making subtle modifications to pictures that are imperceptible to the human eye but detectable by software, entire conversations can happen in the open without raising suspicion.

// EXAMPLE:
// Simplified LSB steganography in JavaScript
function hideMessageInImage(imageData, message) {
  const binaryMessage = textToBinary(message + "\\0"); // null-terminated
  let bitIndex = 0;
  
  for (let i = 0; i < imageData.length; i += 4) {
    if (bitIndex < binaryMessage.length) {
      // Modify the least significant bit of the red channel
      imageData[i] = (imageData[i] & 0xFE) | parseInt(binaryMessage[bitIndex]);
      bitIndex++;
    } else {
      break;
    }
  }
  
  return imageData;
}

As with all powerful tools, steganography has both legitimate and harmful uses. Whistleblowers and journalists in oppressive regimes use it to communicate securely, while malware authors use it to exfiltrate data and hide payloads.

The key takeaway: In the digital world, things aren't always what they seem, and data can hide in plain sight.`,
    author: "ShadowCoder"
  },
  {
    id: "005",
    title: "The Rise of AI-Powered Attacks",
    date: "2024-03-01",
    excerpt: "How artificial intelligence is changing the threat landscape.",
    content: `Artificial intelligence isn't just transforming legitimate technology; it's revolutionizing cyber attacks. This post examines the emerging world of AI-powered threats.

We'll explore:

1. How machine learning is being used to improve phishing attacks
2. AI-generated deepfakes in social engineering
3. Adversarial attacks against security ML models
4. Automated vulnerability discovery using AI
5. Defending against algorithmic attacks

Perhaps most concerning is the democratization of these techniques. What once required teams of skilled attackers can now be accomplished by individuals with access to the right AI tools.

For example, AI models can now:
- Generate phishing emails that adapt to the writing style of a target's colleagues
- Create voice deepfakes in real-time for vishing (voice phishing) attacks
- Automatically probe applications for vulnerabilities using reinforcement learning
- Adapt malware behavior to evade detection systems

But the news isn't all bad. The same technologies power our defenses:

// PSEUDOCODE:
class AISecurityMonitor {
  constructor() {
    this.userBehaviorModel = new RecurrentNeuralNetwork();
    this.knownAttackPatterns = loadAttackDatabase();
    this.anomalyDetector = new AutoEncoder(dimensions: [1024, 128, 32, 128, 1024]);
  }
  
  async monitorNetworkTraffic(packetStream) {
    packetStream.forEach(packet => {
      // Extract features
      const features = this.extractFeatures(packet);
      
      // Check against known patterns
      const matchResult = this.matchKnownAttacks(features);
      
      // Check for anomalies
      const reconstructionError = this.anomalyDetector.getReconstructionError(features);
      
      if (matchResult.score > 0.85 || reconstructionError > this.threshold) {
        this.triggerAlert(packet, matchResult, reconstructionError);
      }
    });
  }
}

The AI security arms race is just beginning. The winners will be those who can leverage these technologies most effectively while understanding their fundamental limitations.`,
    author: "NeuralHacker"
  }
];

const Index = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <Terminal>
      {selectedPost ? (
        <BlogPost 
          title={selectedPost.title}
          date={selectedPost.date}
          content={selectedPost.content}
          author={selectedPost.author}
          onBack={() => setSelectedPost(null)}
        />
      ) : (
        <BlogList 
          posts={SAMPLE_POSTS}
          onSelectPost={setSelectedPost}
        />
      )}
    </Terminal>
  );
};

export default Index;

import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Grimmer Kang</h1>
            <p className="text-xl text-gray-600 mb-2">Tech Lead / Engineering Manager</p>
            <p className="text-base text-gray-500 mb-8">Passionate about building impactful solutions for people</p>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Technology leader with physics background, progressing from mobile and full-stack development to
              AI systems and scalable architectures. Currently leading distributed AI engineering teams at
              Fireflies.ai. Previously contributed to CARTA, an international astronomy software project at Academia Sinica,
              collaborating with US National Radio Astronomy Observatory and global partners. Extensive experience in IoT and streaming technologies. Proven track record in
              building high-performance engineering teams and driving innovation through critical thinking and
              agile methodologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://github.com/grimmer0125"
              className="text-gray-600 hover:text-gray-900 flex items-center">
              <Github className="h-6 w-6" />
              <span className="ml-2">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/tckang"
              className="text-gray-600 hover:text-gray-900 flex items-center">
              <Linkedin className="h-6 w-6" />
              <span className="ml-2">LinkedIn</span>
            </a>
            <a href="mailto:k@grimmer.io"
              className="text-gray-600 hover:text-gray-900 flex items-center">
              <Mail className="h-6 w-6" />
              <span className="ml-2">k@grimmer.io</span>
            </a>
          </div>
        </div>
      </div>

      {/* Featured Work */}
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Work</h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* VS Code Card */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative bg-gray-900">
              <img
                src="assets/vscode-preview.png"
                alt="VSCode Extension Preview"
                className="w-full object-contain"
                style={{ maxHeight: '500px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white">
                  Developer Tools & Open Source
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Creator of developer tools including VS Code, Chrome extensions, and macOS utilities. 
                Author of TypeScript libraries for task queues and numerical computing. 
                Implemented AlphaGo Zero algorithm for tic-tac-toe in JavaScript, 
                demonstrating advanced AI concepts in browser environments.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">VS Code</span>
              </div>
            </div>
          </div>

          {/* Conference Speaking Card */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative h-[451px] md:h-[451px] bg-gray-900">
              <img
                src="assets/pycon-outline.png"
                alt="Conference Speaking"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white">
                  Technical Speaking
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Speaker at PyCon APAC and COSCUP 2021, sharing expertise on Python in browsers for
                medical imaging applications and TypeScript patterns for concurrent processing. Focused
                on practical implementations and real-world applications.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">PyCon APAC</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">COSCUP</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Medical Imaging</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARTA Section */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative bg-gray-900">
              <img
                src="assets/carta-preview.png"
                alt="CARTA Visualization"
                className="w-full object-contain"
                style={{ height: '490px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-bold text-white">
                  Astronomy Software Development
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Led development efforts for CARTA (Cube Analysis and Rendering Tool for Astronomy), an open-source scientific visualization and analysis platform at Academia Sinica, collaborating with international teams to revitalize this project. Improved core performance and resolved critical issues through close collaboration with astronomers across Taiwan, US, and Canada.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          © {new Date().getFullYear()} Grimmer Kang
        </div>
      </footer>
    </div>
  );
}

export default App;
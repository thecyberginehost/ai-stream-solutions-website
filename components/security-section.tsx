import { Shield, Lock, Server, Eye, CheckCircle } from "lucide-react"

export default function SecuritySection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Enterprise-Grade Security & Privacy</h2>
          <p className="mt-4 text-xl text-slate-700 max-w-3xl mx-auto">
            Your business data deserves the highest level of protection. Our infrastructure is designed with security
            and privacy as the foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Server className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Private Cloud Servers</h3>
            <p className="text-sm text-slate-600">
              Each client gets their own dedicated cloud infrastructure—no shared resources.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Lock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Docker Isolation</h3>
            <p className="text-sm text-slate-600">
              Containerized environments ensure complete separation between client workloads.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Zero Data Sharing</h3>
            <p className="text-sm text-slate-600">Your data never touches another client's environment or systems.</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">SOC 2 Compliant</h3>
            <p className="text-sm text-slate-600">Enterprise-grade security controls and regular compliance audits.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Security Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">End-to-End Encryption</h4>
                  <p className="text-sm text-slate-600">
                    All data in transit and at rest is encrypted using industry-standard protocols.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Regular Security Audits</h4>
                  <p className="text-sm text-slate-600">
                    Third-party penetration testing and vulnerability assessments.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Access Controls</h4>
                  <p className="text-sm text-slate-600">Role-based permissions and multi-factor authentication.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Data Backup & Recovery</h4>
                  <p className="text-sm text-slate-600">Automated backups with point-in-time recovery capabilities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Compliance Ready</h4>
                  <p className="text-sm text-slate-600">GDPR, CCPA, and HIPAA compliance frameworks supported.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">24/7 Monitoring</h4>
                  <p className="text-sm text-slate-600">Real-time threat detection and incident response.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

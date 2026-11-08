-- INITIUM ONE LAB V2 — base de datos propuesta para Cloudflare D1.
-- NO aplicada a producción. Usar proveedor de autenticación externo verificado.
-- La sesión del alumno se valida en Worker antes de toda consulta.
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS students (
  id TEXT PRIMARY KEY,
  auth_subject TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  student_id TEXT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  track TEXT NOT NULL CHECK(track IN ('marcha','lanzamiento','cero')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(id, student_id)
);
CREATE INDEX IF NOT EXISTS idx_projects_student ON projects(student_id);

CREATE TABLE IF NOT EXISTS evidence (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  module_code TEXT NOT NULL,
  field_key TEXT NOT NULL,
  value_json TEXT NOT NULL,
  evidence_status TEXT NOT NULL CHECK(evidence_status IN
    ('verified','declared','estimated','hypothetical','missing','scenario')),
  source_kind TEXT NOT NULL DEFAULT 'student_statement',
  source_ref TEXT,
  observed_at TEXT,
  version INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_evidence_project_module ON evidence(project_id,module_code);

CREATE TABLE IF NOT EXISTS lesson_progress (
  project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  module_code TEXT NOT NULL,
  lesson_code TEXT NOT NULL,
  assessment_status TEXT NOT NULL CHECK(assessment_status IN ('started','passed','needs_review')),
  attempt_count INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY(project_id,module_code,lesson_code)
);

CREATE TABLE IF NOT EXISTS module_outcomes (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  module_code TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('draft','review','approved','incomplete')),
  summary TEXT,
  analysis_json TEXT NOT NULL,
  prompt_revision TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_outcome_project ON module_outcomes(project_id,module_code);

CREATE TABLE IF NOT EXISTS findings (
  id TEXT PRIMARY KEY,
  outcome_id TEXT NOT NULL REFERENCES module_outcomes(id) ON DELETE CASCADE,
  statement TEXT NOT NULL,
  evidence_ids_json TEXT NOT NULL DEFAULT '[]',
  cause_status TEXT NOT NULL CHECK(cause_status IN ('verified','hypothesis','unknown')),
  severity TEXT NOT NULL CHECK(severity IN ('green','yellow','red','insufficient')),
  recommendation TEXT,
  priority INTEGER,
  confidence_note TEXT,
  validation_action TEXT
);
CREATE INDEX IF NOT EXISTS idx_findings_outcome ON findings(outcome_id);

CREATE TABLE IF NOT EXISTS document_sections (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  document_code TEXT NOT NULL,
  section_code TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('pending','generated','verified','needs_revision','incomplete')),
  body_text TEXT NOT NULL DEFAULT '',
  references_json TEXT NOT NULL DEFAULT '[]',
  version INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(project_id,document_code,section_code,version)
);
CREATE INDEX IF NOT EXISTS idx_doc_project ON document_sections(project_id,document_code);

CREATE TABLE IF NOT EXISTS document_exports (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  document_code TEXT NOT NULL,
  source_version TEXT NOT NULL,
  storage_key TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('ready','revoked')),
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS ai_usage (
  id TEXT PRIMARY KEY,
  student_id TEXT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  project_id TEXT REFERENCES projects(id) ON DELETE SET NULL,
  usage_type TEXT NOT NULL CHECK(usage_type IN ('tutor','analyst','document','review')),
  model TEXT NOT NULL,
  input_tokens INTEGER NOT NULL DEFAULT 0,
  output_tokens INTEGER NOT NULL DEFAULT 0,
  estimated_usd REAL NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_usage_student ON ai_usage(student_id,created_at);

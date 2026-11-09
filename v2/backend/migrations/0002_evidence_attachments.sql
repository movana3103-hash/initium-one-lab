-- INITIUM ONE LAB — EVIDENCIA MULTIFORMATO PARA LOS 23 MÓDULOS
-- Esquema de preparación. NO EJECUTADO en Cloudflare D1.
-- Los binarios irán a almacenamiento privado R2, no a tablas D1.
-- Cada lectura del archivo y su extracción deben comprobar propietario de proyecto.
CREATE TABLE IF NOT EXISTS evidence_attachments (
 id TEXT PRIMARY KEY,
 project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
 module_code TEXT NOT NULL,
 field_key TEXT NOT NULL,
 filename TEXT NOT NULL,
 extension TEXT NOT NULL,
 mime_type TEXT NOT NULL,
 bytes INTEGER NOT NULL CHECK (bytes > 0),
 sha256 TEXT,
 storage_key TEXT NOT NULL UNIQUE,
 processing_status TEXT NOT NULL DEFAULT 'uploaded'
   CHECK (processing_status IN ('uploaded','quarantined','extracting','extracted','manual_review','rejected','failed')),
 validation_status TEXT NOT NULL DEFAULT 'unverified'
   CHECK (validation_status IN ('unverified','student_declared','source_read','cross_checked','contradictory')),
 error_code TEXT,
 created_at TEXT NOT NULL DEFAULT (datetime('now')),
 updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_evidence_attachments_project_module
 ON evidence_attachments(project_id,module_code,field_key);
CREATE TABLE IF NOT EXISTS evidence_extracts (
 id TEXT PRIMARY KEY,
 attachment_id TEXT NOT NULL REFERENCES evidence_attachments(id) ON DELETE CASCADE,
 extractor_version TEXT NOT NULL,
 extracted_text TEXT,
 extraction_json TEXT,
 units TEXT,
 period_start TEXT,
 period_end TEXT,
 pages_or_sheets_json TEXT NOT NULL DEFAULT '[]',
 warnings_json TEXT NOT NULL DEFAULT '[]',
 created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_evidence_extracts_attachment ON evidence_extracts(attachment_id);
CREATE TABLE IF NOT EXISTS evidence_claim_links (
 id TEXT PRIMARY KEY,
 attachment_id TEXT NOT NULL REFERENCES evidence_attachments(id) ON DELETE CASCADE,
 module_outcome_id TEXT NOT NULL REFERENCES module_outcomes(id) ON DELETE CASCADE,
 excerpt_location TEXT,
 claim_key TEXT NOT NULL,
 evidence_note TEXT NOT NULL,
 status TEXT NOT NULL
   CHECK (status IN ('supports','conflicts','not_assessed')),
 created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_claim_links_outcome ON evidence_claim_links(module_outcome_id);

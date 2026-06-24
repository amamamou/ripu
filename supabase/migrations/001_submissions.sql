-- Table des soumissions (alignée avec Supabase)
CREATE TABLE IF NOT EXISTS submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  reference TEXT NOT NULL UNIQUE,
  draft JSONB NOT NULL,
  pdf_url TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_submissions_user_id ON submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_submissions_reference ON submissions(reference);

-- Un seul dépôt par compte auteur
ALTER TABLE submissions DROP CONSTRAINT IF EXISTS submissions_one_per_user;
ALTER TABLE submissions ADD CONSTRAINT submissions_one_per_user UNIQUE (user_id);

CREATE OR REPLACE FUNCTION has_user_submitted(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM submissions WHERE submissions.user_id = $1
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own submissions" ON submissions;
CREATE POLICY "Users can view their own submissions"
  ON submissions FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own submissions" ON submissions;
CREATE POLICY "Users can insert their own submissions"
  ON submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

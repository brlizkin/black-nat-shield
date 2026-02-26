
-- Fix INSERT policy to be PERMISSIVE (not restrictive) so public submissions work
DROP POLICY IF EXISTS "Anyone can submit contact" ON public.contacts;

CREATE POLICY "Anyone can submit contact"
  ON public.contacts
  FOR INSERT
  WITH CHECK (true);

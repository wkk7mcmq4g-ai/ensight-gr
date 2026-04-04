

## Plan: Replace Placeholder Logos with Real Client Logos

Three client logos were uploaded: **HMS**, **QSIX** (ico format), and **Loux**.

### Steps

1. **Copy uploaded logos** to `src/assets/`:
   - `user-uploads://HMS_new.jpg` → `src/assets/logo-hms.jpg`
   - `user-uploads://02_Logos_QSIX_Logo_Purple_Medium_640px_-_Copy_2_-_Copy.ico` → `src/assets/logo-qsix.ico`
   - `user-uploads://Loux-logo.png` → `src/assets/logo-loux.png`

2. **Update `LogoStripSection.tsx`**:
   - Replace 4 placeholder imports with the 3 real logos
   - Update alt text to match each brand (HMS, QSIX, Loux)
   - Remove unused placeholder files references
   - Keep the greyscale + opacity styling for uniform appearance

3. **Clean up** unused placeholder PNGs (1–5) from `src/assets/`.

### Technical Detail
- The `.ico` format should work as an `<img>` src in browsers. If it causes issues, we can convert it.
- With only 3 logos the strip will be slightly narrower — spacing will adjust naturally via flexbox.


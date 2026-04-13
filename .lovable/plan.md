

# Replace Generated Logos with Real Client Logos

The user has uploaded the actual brand logos for all five clients. These should replace the generated placeholder wordmarks.

## Files to copy

| Upload | Destination |
|--------|------------|
| `HMS-Logo-Purple-RGB-2.png` | `src/assets/logo-hms.png` |
| `images-removebg-preview-2.png` | `src/assets/logo-volunteering-matters.png` |
| `Loux-logo-3.png` | `src/assets/logo-loux.png` |
| `QsixLogo_app_no_back-2.png` | `src/assets/logo-qsix.png` |
| `Myatlogo_-_Copy-removebg-preview-3.png` | `src/assets/logo-myathenstransfers.png` |

## What changes

- **5 asset files replaced** — copy each uploaded logo over the existing placeholder
- **No code changes needed** — filenames stay the same, imports already point to these paths
- The Loux logo is a new addition already referenced in `LogoStripSection.tsx`


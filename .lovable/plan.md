

## Plan: Equalise Logo Sizes in Logo Strip

The logos currently all share the same CSS box (`h-12 md:h-14, w-[150px] md:w-[180px]`) with `object-contain`, but different source images have different aspect ratios and visual weights, making some appear larger or smaller than others.

### Approach

Give each logo its own max-height override so they all appear visually balanced, while keeping the shared `object-contain` behaviour. This is the standard approach for logo strips — each logo needs individual tuning because logos vary in shape (wide vs tall vs square).

### Changes

**`src/components/home/LogoStripSection.tsx`**:
- Add a per-logo `className` override to the data array (e.g. `h-8`, `h-10`, `h-14`) so each logo can be sized to look visually equal
- Remove the shared fixed `h-12 md:h-14` and replace with a uniform max-height container, letting per-logo classes control the visual size
- Keep `object-contain` and the opacity/hover styling unchanged

Example structure:
```ts
const logos = [
  { src: logoHms, alt: 'HMS', className: 'h-10 md:h-12' },
  { src: logoQsix, alt: 'QSIX', className: 'h-8 md:h-10' },
  { src: logoLoux, alt: 'Loux', className: 'h-10 md:h-12' },
  { src: logoMat, alt: 'myAthensTransfers', className: 'h-10 md:h-12' },
  { src: logoVm, alt: 'Volunteering Matters', className: 'h-12 md:h-14' },
];
```

The exact height values will be tuned based on each logo's visual weight. All logos will share a consistent container width for even spacing.


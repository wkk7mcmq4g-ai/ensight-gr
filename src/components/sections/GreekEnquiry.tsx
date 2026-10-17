export default function GreekEnquiry() {
  const field = 'w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-violet-300';
  return <section id="contact" className="scroll-mt-24 bg-[hsl(270,40%,10%)] text-white py-16 px-6">
    <div className="max-w-xl mx-auto"><h2 className="text-3xl font-semibold mb-4">Τι θα θέλατε να λειτουργεί καλύτερα;</h2><p className="text-white/75 leading-relaxed mb-8">Μια πιο χρήσιμη αναφορά, μια απλούστερη διαδικασία ή μια εφαρμογή που χρειάζεται η ομάδα σας. Γράψτε μου τι σας απασχολεί. Απαντώ εντός μίας εργάσιμης ημέρας.</p>
    <form action="https://formsubmit.co/georgekondylis@msn.com" method="POST" className="space-y-4">
      <input type="hidden" name="_subject" value="Νέο αίτημα από το Ensight" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_next" value="https://www.ensight.gr/el/enquiry-sent" /><input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="block text-sm">Ονοματεπώνυμο<input className={field + ' mt-2'} name="name" autoComplete="name" required maxLength={120} /></label>
      <label className="block text-sm">Εταιρεία <span className="text-white/60">(προαιρετικό)</span><input className={field + ' mt-2'} name="company" autoComplete="organization" maxLength={180} /></label>
      <label className="block text-sm">Email<input className={field + ' mt-2'} name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label className="block text-sm">Μήνυμα<textarea className={field + ' mt-2'} name="message" rows={4} required maxLength={5000} /></label>
      <p className="text-xs text-white/65 leading-relaxed">Ο Γιώργος Κονδυλής χρησιμοποιεί τα στοιχεία σας για να απαντήσει στο αίτημά σας. Μην συμπεριλάβετε εμπιστευτικά επιχειρησιακά δεδομένα. Η αποστολή και ο έλεγχος ανεπιθύμητων μηνυμάτων γίνονται μέσω FormSubmit. Ενδέχεται να ζητηθεί έλεγχος πριν την υποβολή. <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer" className="underline">Πολιτική απορρήτου παρόχου (αγγλικά)</a>.</p>
      <button className="bg-primary text-white rounded-lg px-7 py-3 font-semibold min-h-11 hover:bg-primary/90" type="submit">Αποστολή μηνύματος</button>
      <p className="text-sm text-white/75">Ή στείλτε email στο <a className="underline break-all" href="mailto:georgekondylis@msn.com">georgekondylis@msn.com</a>.</p>
    </form></div>
  </section>;
}

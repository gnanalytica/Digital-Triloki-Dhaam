import type { T } from '@/lib/i18n';

/**
 * Marks content the mandir still has to supply. Nothing inside a placeholder is presented as fact; the dashed
 * outline and the tag say so. Remove the wrapper once the real content is in.
 */
export function Ph({ T, as: Tag = 'div', className = '', children }: { T: T; as?: 'div' | 'article' | 'ul'; className?: string; children: React.ReactNode }) {
  return <Tag className={`ph ${className}`.trim()}><PhTag T={T} />{children}</Tag>;
}
export const PhTag = ({ T }: { T: T }) => <span className="ph-tag">{T.t('ph')}</span>;

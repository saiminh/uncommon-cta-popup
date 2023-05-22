import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	return (
		<div { ...useBlockProps({
      className: 'uncommon-cta-popup',
    }) }>
      <RichText
        tagName="div"
        className="uncommon-cta-popup__title"
        value={ attributes.text }
        onChange={ ( text ) => setAttributes( { text } ) }
        placeholder={ __( 'Title', 'uncommon-components' ) }
      />
			<InnerBlocks />
		</div>
	);
}

import React from 'react';
import Icon from '../components/ui/Icon';

const IconsUI = () => {
    const getHtml = (name) => {
        return <div className="grid justify-center justify-items-center" key={name}>
            <Icon name={name} stroke="#000000" fill="none" />
            <span className="font-mono bg-gray-50 px-1 mt-2">{name}</span>
        </div>
    }
    const icons = ["adjustments", "annotation", "archive", "arrow-circle-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-down", "arrow-left", "arrow-narrow-down", "arrow-narrow-left", "arrow-narrow-right", "arrow-narrow-up", "arrow-right", "arrow-up", "at-symbol", "bell", "bookmark", "book-open", "briefcase", "calendar", "camera", "cash", "chart-pie", "chat", "check-circle", "check", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "clipboard-check", "clipboard-copy", "clipboard-list", "clipboard", "clock", "cloud-download", "cloud-upload", "code", "cog", "collection", "color-swatch", "credit-card", "currency-dollar", "currency-euro", "currency-pound", "currency-rupee", "currency-yen", "document-add", "document-download", "document-duplicate", "document-remove", "document", "dots-circle-horizontal", "dots-horizontal", "dots-vertical", "download", "duplicate", "emoji-happy", "emoji-sad", "exclamation-circle", "exclamation", "external-link", "eye", "filter", "flag", "folder", "globe-alt", "globe", "hashtag", "heart", "home", "inbox-in", "inbox", "information-circle", "light-bulb", "lightning-bolt", "link", "location-marker", "lock-closed", "lock-open", "mail-open", "mail", "menu-alt-1", "menu-alt-2", "menu-alt-3", "menu-alt-4", "menu", "minus-circle", "moon", "office-building", "paper-clip", "pencil-alt", "pencil", "phone-incoming", "phone-outgoing", "phone", "photograph", "plus-circle", "plus", "printer", "qrcode", "question-mark-circle", "receipt-refund", "refresh", "reply", "scale", "search", "selector", "share", "shield-check", "shield-exclamation", "sort-ascending", "sort-descending", "sparkles", "sun", "switch-horizontal", "switch-vertical", "tag", "template", "ticket", "translate", "trash", "trending-down", "trending-up", "upload", "user-circle", "user-group", "user-add", "user-remove", "users", "user", "view-boards", "view-list", "volume-off", "volume-up", "x-circle", "x", "zoom-in", "zoom-out"]
    return (<div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 my-10 gap-x-2 gap-y-8">
            {icons.map(ic => (
                getHtml(ic)
            ))}
        </div>
    </div>);
}

export default IconsUI;
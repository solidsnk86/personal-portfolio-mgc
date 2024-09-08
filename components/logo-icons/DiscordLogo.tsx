export const DiscordLogo = ({
  className,
  ...props
}: {
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="40"
      fill="none"
      className={className}
      {...props}
    >
      <path
        fill="#999"
        d="M96.273 15.7v9.677h-3.227v-1.76c-.273.663-.688 1.168-1.245 1.512-.557.344-1.246.517-2.062.517-.73 0-1.367-.18-1.911-.543a3.572 3.572 0 0 1-1.26-1.492c-.293-.632-.441-1.346-.441-2.145-.01-.823.147-1.563.468-2.217a3.683 3.683 0 0 1 1.357-1.532c.584-.366 1.25-.55 1.998-.55 1.537 0 2.57.68 3.096 2.042v-3.508h3.228zm-3.71 6.944c.33-.327.493-.752.493-1.27s-.159-.91-.48-1.223c-.319-.313-.758-.47-1.309-.47-.55 0-.979.159-1.304.478-.326.318-.487.731-.487 1.242s.161.928.487 1.25c.325.323.755.483 1.291.483.543 0 .98-.165 1.31-.49zm-7.014-4.982v2.904c-.335-.225-.769-.337-1.304-.337-.703 0-1.244.217-1.62.651-.379.435-.567 1.11-.567 2.024v2.473H78.83v-7.862h3.162v2.499c.175-.913.46-1.587.851-2.023.39-.434.893-.65 1.507-.65.466 0 .865.107 1.2.321h-.001zm-15.632 7.42c-.76-.377-1.339-.891-1.739-1.546a4.13 4.13 0 0 1-.6-2.191c0-.807.2-1.526.6-2.158.4-.632.977-1.127 1.734-1.486.754-.36 1.655-.538 2.7-.538 1.045 0 1.946.179 2.702.538.755.359 1.33.85 1.725 1.479.396.627.594 1.348.594 2.164a4.12 4.12 0 0 1-.594 2.19c-.395.655-.973 1.17-1.733 1.546-.76.376-1.659.564-2.695.564-1.036 0-1.935-.186-2.694-.563zm4.004-2.385c.32-.327.482-.759.482-1.296 0-.538-.16-.966-.483-1.283-.319-.319-.756-.478-1.309-.478-.553 0-1.004.16-1.325.478-.32.318-.48.745-.48 1.283 0 .537.16.97.48 1.296.32.326.761.49 1.325.49.553 0 .99-.164 1.31-.49zm-13.365 2.384c-.756-.375-1.325-.887-1.706-1.532-.38-.645-.572-1.371-.572-2.177 0-.805.197-1.528.593-2.164.396-.635.975-1.135 1.74-1.498.763-.363 1.676-.543 2.74-.543 1.317 0 2.41.282 3.28.847v2.46a4.062 4.062 0 0 0-1.073-.525 4.17 4.17 0 0 0-1.312-.202c-.817 0-1.455.152-1.916.457-.46.305-.693.703-.693 1.197 0 .494.224.878.673 1.19.447.31 1.096.465 1.95.465.438 0 .87-.066 1.298-.194a4.84 4.84 0 0 0 1.099-.478v2.379c-.965.591-2.085.887-3.36.887-1.072-.004-1.986-.192-2.741-.57v.001zm-9.328.283a6.88 6.88 0 0 1-1.925-.82v-2.231c.432.34 1.01.62 1.735.84a7.24 7.24 0 0 0 2.101.33c.317 0 .555-.044.717-.128.163-.085.244-.186.244-.304a.459.459 0 0 0-.133-.335c-.088-.091-.26-.165-.513-.229l-1.58-.362c-.906-.216-1.548-.514-1.93-.895-.382-.381-.572-.88-.572-1.498 0-.52.165-.971.5-1.358.334-.385.808-.683 1.423-.893.617-.21 1.335-.316 2.162-.316.737 0 1.413.08 2.028.242.616.162 1.124.366 1.529.618v2.11a5.578 5.578 0 0 0-1.43-.599 6.258 6.258 0 0 0-1.669-.22c-.826 0-1.238.144-1.238.43 0 .134.064.234.192.302.128.067.362.136.703.209l1.318.242c.861.15 1.502.418 1.923.798.423.38.634.943.634 1.688 0 .816-.349 1.463-1.047 1.943s-1.69.72-2.972.72a8.628 8.628 0 0 1-2.2-.284zm-6.584-5.996c.986.433 2.21.452 3.218 0v6.05h-3.218v-6.05zm1.61-1.016c.889 0 1.61-.66 1.61-1.475 0-.814-.721-1.474-1.61-1.474-.887 0-1.61.66-1.61 1.474s.722 1.475 1.61 1.475zM32.69 15.969h5.138c1.239 0 2.285.197 3.143.591.857.394 1.498.943 1.924 1.646.425.702.64 1.508.64 2.414 0 .905-.223 1.69-.667 2.411-.444.722-1.12 1.292-2.029 1.713-.908.42-2.034.632-3.38.632H32.69v-9.407zm4.717 7.015c.833 0 1.475-.213 1.923-.636.447-.428.671-1.007.671-1.742 0-.682-.2-1.226-.598-1.632-.399-.407-1.003-.613-1.811-.613h-1.607v4.623h1.421zm-9.829 3.665a19.68 19.68 0 0 1-6.06 3.1 14.866 14.866 0 0 1-1.295-2.132c.71-.27 1.394-.602 2.045-.995a13.32 13.32 0 0 1-.5-.395c-3.891 1.839-8.169 1.839-12.106 0-.164.137-.33.269-.502.395.647.388 1.33.722 2.044.993-.375.751-.81 1.463-1.298 2.134a19.747 19.747 0 0 1-6.054-3.1c-.424-4.532.424-9.13 3.547-13.847a19.46 19.46 0 0 1 4.942-1.552c.214.383.468.9.64 1.31a18.146 18.146 0 0 1 5.471 0c.171-.41.42-.927.632-1.31 1.732.3 3.389.824 4.937 1.549 2.708 4.04 4.055 8.596 3.558 13.85zM13.89 21.417c.022-1.344-.948-2.446-2.15-2.446-1.203 0-2.152 1.104-2.152 2.447 0 1.342.969 2.443 2.152 2.443 1.182 0 2.153-1.102 2.15-2.444zm7.95 0c.022-1.344-.947-2.446-2.15-2.446-1.203 0-2.152 1.104-2.152 2.447 0 1.342.97 2.443 2.152 2.443 1.182 0 2.15-1.102 2.15-2.444z"
      />
    </svg>
  );
};

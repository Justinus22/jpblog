import {AuthProvider} from "./Auth"

function ProviderWrapper(props) {
  return (
    <AuthProvider>
      {props.children}
    </AuthProvider>
  );
}

export default ProviderWrapper;

minikube delete

Install the Ingress Controller: kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud/deploy.yaml

Enable ingress: minikube addons enable ingress

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

skaffold dev

---

npm publish --access public

npm version patch

npm update @irm_tickets/common

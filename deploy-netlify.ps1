# Quick Deploy to Netlify
Write-Host "🚀 Deploying to Netlify..." -ForegroundColor Green

# Check if Netlify CLI is installed
$netlifyInstalled = Get-Command netlify -ErrorAction SilentlyContinue

if (-not $netlifyInstalled) {
    Write-Host "📦 Installing Netlify CLI..." -ForegroundColor Yellow
    npm install -g netlify-cli
}

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host "🌐 Deploying to Netlify..." -ForegroundColor Cyan
    
    # Deploy to production
    netlify deploy --prod
    
    Write-Host "🎉 Deployment complete!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed. Please fix errors and try again." -ForegroundColor Red
}</pmb:parameter
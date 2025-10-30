# Quick Deploy to Vercel
Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Green

# Check if Vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host "🌐 Deploying to Vercel..." -ForegroundColor Cyan
    
    # Deploy to production
    vercel --prod
    
    Write-Host "🎉 Deployment complete!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed. Please fix errors and try again." -ForegroundColor Red
}